import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Notes } from '../../interfaces/notes';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteValidators } from '../../validators/note.validators';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-notes-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss',
})
export class NotesFormComponent implements OnInit, OnChanges {
  @Input() note!: Notes;
  @Output() formSubmitted = new EventEmitter<void>();

  noteForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private toastService: ToastService,
  ) {}

  private getTitleValidators(currentId?: string): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(3),
      NoteValidators.noWhitespace,
      NoteValidators.onlyAlphabets,
      NoteValidators.maxLength(50),
      NoteValidators.noConsecutiveSpaces,
      NoteValidators.noOnlyRepeatingChars,
      NoteValidators.firstLetterCapital,
      NoteValidators.noDuplicateTitle(this.noteService, currentId),
    ];
  }

  private getContentValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(5),
      NoteValidators.noWhitespace,
      NoteValidators.noConsecutiveSpaces,
      NoteValidators.noHtmlTags,
      NoteValidators.noUrl,
      NoteValidators.minWordCount(3),
      NoteValidators.wordLimit(100),
      NoteValidators.maxLength(500),
    ];
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', this.getTitleValidators()],
      content: ['', this.getContentValidators()],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note'] && this.note && this.noteForm) {
      this.isEditMode = true;
      this.noteForm
        .get('title')
        ?.setValidators(this.getTitleValidators(this.note.id));
      this.noteForm.get('title')?.updateValueAndValidity();

      this.noteForm.patchValue({
        title: this.note.title,
        content: this.note.content,
      });
    }
  }

  get title() {
    return this.noteForm.get('title');
  }

  get content() {
    return this.noteForm.get('content');
  }

  getErrorMessage(field: 'title' | 'content'): string {
    const control = this.noteForm.get(field);
    if (!control || !control.touched || !control.errors) return '';

    const errors: Record<string, string> = {
      required: 'This field is required.',
      minlength: `Minimum ${control.errors['minlength']?.requiredLength} characters required.`,
      noWhitespace: 'Field cannot be empty or just spaces.',
      noConsecutiveSpaces: 'Consecutive spaces are not allowed.',
      maxLength: `Maximum ${control.errors['maxLength']?.max} characters allowed.`,
      onlyAlphabets:
        'Title must contain alphabets only — no numbers or special characters.',
      noOnlyRepeatingChars: 'Title cannot be a single repeated character.',
      firstLetterCapital: 'Title must start with a capital letter.',
      noDuplicateTitle: 'A note with this title already exists.',
      noUrl: 'URLs are not allowed in content.',
      noHtmlTags: 'HTML tags are not allowed in content.',
      minWordCount: `Minimum ${control.errors['minWordCount']?.min} words required. You have ${control.errors['minWordCount']?.actual}.`,
      wordLimit: `Maximum ${control.errors['wordLimit']?.max} words allowed. You have ${control.errors['wordLimit']?.actual}.`,
    };

    const firstError = Object.keys(control.errors)[0];
    return errors[firstError] || 'Invalid input.';
  }

  onSubmit(): void {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }

    const { title, content } = this.noteForm.value;

    if (this.isEditMode && this.note?.id) {
      this.noteService.updateNote(this.note.id, { title, content });
      this.toastService.show('Note updated successfully!', 'success');
    } else {
      this.noteService.createNote({ title, content });
      this.toastService.show('Note created successfully!', 'success');
    }

    this.formSubmitted.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.noteForm.reset();
    this.isEditMode = false;
    this.noteForm.get('title')?.setValidators(this.getTitleValidators());
    this.noteForm.get('title')?.updateValueAndValidity();
  }
}
