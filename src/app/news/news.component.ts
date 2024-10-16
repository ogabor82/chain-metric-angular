import { Component, Input } from '@angular/core';
import { News } from './news.model';

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
