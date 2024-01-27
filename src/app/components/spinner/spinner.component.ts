import { AnimationBuilder, animate, style } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { randomWordList } from '../../../assets/content';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent implements AfterViewInit {
  @ViewChild('animationTarget') animationTarget!: ElementRef;
  protected candidateSet = randomWordList;
  private animationBuilder = inject(AnimationBuilder);
  private numberOfTokens = 5;

  ngAfterViewInit() {
    const style = getComputedStyle(this.animationTarget.nativeElement);
    this.numberOfTokens = parseInt(style.getPropertyValue('--token-number'));
  }

  triggerSpin() {
    const randomNumberOfSteps = Math.floor(Math.random() * 16);
    this.spin(randomNumberOfSteps);
  }

  private spin(steps: number) {
    console.log('steps: ', steps);
    const player = this.animationBuilder
      .build([
        animate(
          '1s ease',
          style({
            transform: `translateY(-${steps * (100 / this.numberOfTokens)}%)`,
          })
        ),
      ])
      .create(this.animationTarget.nativeElement);

    player.play();
  }
}
