import { Component, inject, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'book-booking-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css',
})
export class BookingPageComponent implements OnInit {
  private _booking = inject(BookingService);
  selectedSeats = this._booking.selectedSeats;
  layout: any = null;

  ngOnInit(): void {
    this._booking.getLayoutForBooking().subscribe((response) => {
      this.layout = response;
    });
  }

  selectSeat(seat: any) {
    this._booking.selectSeat(seat)
  }
}
