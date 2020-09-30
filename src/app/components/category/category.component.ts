import {Component, Input} from '@angular/core';
import {Accordian} from 'src/app/app.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  show = false;
  @Input() accordian!: Accordian;
}
