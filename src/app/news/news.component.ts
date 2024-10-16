import { Component, Input } from '@angular/core';

interface News {
  imageurl: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  @Input({ required: true }) news!: News;
}
