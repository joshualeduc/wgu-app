import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStarship } from 'src/app/shared/starship.model';
import { StarshipsService } from 'src/app/shared/starships.service';

@Component({
  selector: 'wgu-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  starshipSub!: Subscription;
  starshipsWithPilots!: IStarship[];

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {
    this.starshipSub = this.starshipsService
      .getStarshipsWithPilots()
      .subscribe({
        next: (starships) => {
          this.starshipsWithPilots = starships;
        },
      });
  }

  buyLesson(): void {}
}
