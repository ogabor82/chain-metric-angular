import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input({ required: true }) name!: string;
  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelected() {
    this.categorySelected.emit(this.name);
  }
}
