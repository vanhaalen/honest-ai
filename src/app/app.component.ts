import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'honest-ai';
}
