import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-listing-page',
  standalone: true,
  imports: [],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css',
})
export class ListingPageComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  searchText: string = '';

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.searchText = params?.['search'] || "";
    });
  }
}
