import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Card overview
 */
@Component({
  selector: 'card-aulas-components',
  templateUrl: 'card-aulas-components.html',
  styleUrls: ['card-aulas-components.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardAulasComponents {}
