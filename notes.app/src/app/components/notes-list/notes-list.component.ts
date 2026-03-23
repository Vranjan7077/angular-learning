import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Notes } from '../../interfaces/notes';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, ConfirmationModalComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent implements OnInit {
  @Output() editNote = new EventEmitter<Notes>();

  notes: Notes[] = [];
  expandedNoteIds: Set<string> = new Set();

  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  pendingAction!: () => void;

  constructor(
    private noteService: NoteService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.noteService.notes$.subscribe((notes) => {
      this.notes = notes;
    });
  }

  onEdit(note: Notes): void {
    this.editNote.emit(note);
  }

  onDelete(id: string): void {
    this.modalTitle = 'Delete Note';
    this.modalMessage = 'Are you sure you want to delete this note?';
    this.pendingAction = () => {
      this.noteService.deleteNote(id);
      this.toastService.show('Note deleted successfully.', 'error');
    };
    this.showModal = true;
  }

  onClearAll(): void {
    this.modalTitle = 'Clear All Notes';
    this.modalMessage =
      'Are you sure you want to delete all notes? This cannot be undone.';
    this.pendingAction = () => {
      this.noteService.clearNotes();
      this.toastService.show('All notes cleared.', 'error');
    };
    this.showModal = true;
  }

  onToggleFavourite(note: Notes): void {
    this.noteService.toggleFavourite(note.id);
    const msg = note.isFavourite
      ? 'Removed from favourites.'
      : 'Added to favourites!';
    this.toastService.show(msg, 'info');
  }

  togglePreview(id: string): void {
    this.expandedNoteIds.has(id)
      ? this.expandedNoteIds.delete(id)
      : this.expandedNoteIds.add(id);
  }

  isExpanded(id: string): boolean {
    return this.expandedNoteIds.has(id);
  }

  onModalConfirmed(): void {
    this.pendingAction();
    this.showModal = false;
  }

  onModalCancelled(): void {
    this.showModal = false;
  }
}
