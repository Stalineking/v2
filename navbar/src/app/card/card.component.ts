import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaincontainComponent } from '../maincontain/maincontain.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MaincontainComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  activeCard: number = -1;
  cardHovering: boolean[] = [false, false, false, false];
  NameComponent = 'Home';
  Name = 'Devices';

  constructor(private router: Router) {}

  navigateToHotelList(): void {
    this.router.navigate(['/hotel-list']);
  }

  colorSvg(): string {
    return this.cardHovering[0] ? 'white' : 'black';
  }
  selectedCard(index: number) {
    this.navigateToHotelList();
    this.activeCard = index;
  }

  onMouseEnter(index: number): void {
    this.cardHovering[index - 1] = true;
  }

  onMouseLeave(index: number): void {
    this.cardHovering[index - 1] = false;
  }
}
