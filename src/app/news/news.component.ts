import { Component } from '@angular/core';

import DUMMY_NEWS from '../news-dummy.json';

const randomIndex = Math.floor(Math.random() * DUMMY_NEWS.Data.length);

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  selectedNews = DUMMY_NEWS.Data[randomIndex];
}
