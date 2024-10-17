import { Component } from '@angular/core';
import { NewWatchlistComponent } from '../new-watchlist/new-watchlist.component';

@Component({
  selector: 'app-watchlists',
  standalone: true,
  imports: [NewWatchlistComponent],
  templateUrl: './watchlists.component.html',
  styleUrl: './watchlists.component.scss',
})
export class WatchlistsComponent {
  isAddWatchlistVisible = false;
  onAddWatchlist() {
    this.isAddWatchlistVisible = true;
  }

  onClose() {
    this.isAddWatchlistVisible = false;
  }
}
