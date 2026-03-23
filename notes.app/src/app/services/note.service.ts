import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Notes } from '../interfaces/notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesSubject: BehaviorSubject<Notes[]> = new BehaviorSubject<Notes[]>(
    this.loadFromStorage(),
  );
  public notes$: Observable<Notes[]> = this.notesSubject.asObservable();

  constructor() {}

  toggleFavourite(id: string): void {
    const currentNotes = this.notesSubject.getValue();
    const updated = currentNotes.map((note) =>
      note.id === id
        ? { ...note, isFavourite: !note.isFavourite, updatedAt: new Date() }
        : note,
    );
    this.notesSubject.next(updated);
    this.saveToStorage(updated);
  }

  createNote(
    note: Omit<Notes, 'id' | 'createdAt' | 'updatedAt' | 'isFavourite'>,
  ): void {
    const newNote: Notes = {
      ...note,
      id: this.generateId(),
      isFavourite: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const currentNotes = this.notesSubject.getValue();
    const updated = [...currentNotes, newNote];
    this.notesSubject.next(updated);
    this.saveToStorage(updated);
  }

  updateNote(id: string, changes: Partial<Notes>): void {
    const currentNotes = this.notesSubject.getValue();
    const updated = currentNotes.map((note) =>
      note.id === id ? { ...note, ...changes, updatedAt: new Date() } : note,
    );
    this.notesSubject.next(updated);
    this.saveToStorage(updated);
  }

  deleteNote(id: string): void {
    const currentNotes = this.notesSubject.getValue();
    const updated = currentNotes.filter((note) => note.id !== id);
    this.notesSubject.next(updated);
    this.saveToStorage(updated);
  }

  getNoteById(id: string): Notes | undefined {
    return this.notesSubject.getValue().find((note) => note.id === id);
  }

  getAllNotes(): Notes[] {
    return this.notesSubject.getValue();
  }

  clearNotes(): void {
    this.notesSubject.next([]);
    localStorage.removeItem('notes');
  }

  private generateId(): string {
    return crypto.randomUUID();
  }

  private getStorageKey(): string {
    const stored = localStorage.getItem('currentUser');
    const user = stored ? JSON.parse(stored) : null;
    return user ? `notes_${user.id}` : 'notes_guest';
  }

  private saveToStorage(notes: Notes[]): void {
    localStorage.setItem(this.getStorageKey(), JSON.stringify(notes));
  }

  private loadFromStorage(): Notes[] {
    const stored = localStorage.getItem(this.getStorageKey());
    return stored ? JSON.parse(stored) : [];
  }
}
