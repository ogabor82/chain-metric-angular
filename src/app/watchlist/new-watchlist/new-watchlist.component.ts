import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-watchlist',
  standalone: true,
  imports: [],
  templateUrl: './new-watchlist.component.html',
  styleUrl: './new-watchlist.component.scss',
})
export class NewWatchlistComponent {
  @Output() closeDialog = new EventEmitter<void>();

  onClose() {
    this.closeDialog.emit();
  }
}
