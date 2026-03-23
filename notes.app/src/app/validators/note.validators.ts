import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NoteService } from '../services/note.service';

export class NoteValidators {
  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return value.trim().length === 0 ? { noWhitespace: true } : null;
  }

  static noConsecutiveSpaces(
    control: AbstractControl,
  ): ValidationErrors | null {
    const value = control.value || '';
    return /\s{2,}/.test(value) ? { noConsecutiveSpaces: true } : null;
  }

  static maxLength(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      return value.length > max
        ? { maxLength: { max, actual: value.length } }
        : null;
    };
  }

  static onlyAlphabets(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const pattern = /^[a-zA-Z\s]*$/;
    return !pattern.test(value) ? { onlyAlphabets: true } : null;
  }

  static noOnlyRepeatingChars(
    control: AbstractControl,
  ): ValidationErrors | null {
    const value = (control.value || '').trim();
    if (!value) return null;
    const allSame = value.split('').every((c: string) => c === value[0]);
    return allSame ? { noOnlyRepeatingChars: true } : null;
  }

  static firstLetterCapital(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    if (!value) return null;
    return value[0] !== value[0].toUpperCase()
      ? { firstLetterCapital: true }
      : null;
  }

  static noDuplicateTitle(
    noteService: NoteService,
    currentId?: string,
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value || '').trim().toLowerCase();
      const isDuplicate = noteService
        .getAllNotes()
        .some(
          (note) =>
            note.title.trim().toLowerCase() === value && note.id !== currentId,
        );
      return isDuplicate ? { noDuplicateTitle: true } : null;
    };
  }

  static minWordCount(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
      return wordCount < min
        ? { minWordCount: { min, actual: wordCount } }
        : null;
    };
  }

  static wordLimit(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
      return wordCount > max ? { wordLimit: { max, actual: wordCount } } : null;
    };
  }

  static noUrl(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const urlPattern = /(https?:\/\/|www\.)\S+/gi;
    return urlPattern.test(value) ? { noUrl: true } : null;
  }

  static noHtmlTags(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const htmlPattern = /<[^>]*>/g;
    return htmlPattern.test(value) ? { noHtmlTags: true } : null;
  }
}
