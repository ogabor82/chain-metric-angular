import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';

import DUMMY_NEWS from './news-dummy.json';
import { CategoryComponent } from './category/category.component';
import { WatchlistsComponent } from './watchlist/watchlists/watchlists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NewsComponent,
    CategoryComponent,
    WatchlistsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedCategory: string = '';

  get filteredNews() {
    return this.selectedCategory
      ? this.news.filter((news: any) =>
          news.categories.split('|').includes(this.selectedCategory)
        )
      : this.news;
  }

  onCategorySelected(categoryName: string) {
    this.selectedCategory = categoryName;
  }

  title = 'chain-metrics';
  news: any = DUMMY_NEWS.Data;
  categories = DUMMY_NEWS.Data.map((news: any) => news.categories.split('|'))
    .flat()
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );
}
