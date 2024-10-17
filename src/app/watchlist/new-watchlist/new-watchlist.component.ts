import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-watchlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-watchlist.component.html',
  styleUrl: './new-watchlist.component.scss',
})
export class NewWatchlistComponent {
  @Output() closeDialog = new EventEmitter<void>();
  watchlistName = '';
  watchlistDescription = '';
  watchlistCategories = '';

  onClose() {
    this.closeDialog.emit();
  }
}
