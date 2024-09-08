import { Component, inject, Input } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'book-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() applicationName: string = '';

  private _calculator = inject(CalculatorService)

}
