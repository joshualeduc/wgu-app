import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IStarship } from 'src/app/shared/starship.model';
import { StarshipsService } from 'src/app/shared/starships.service';
import { IShipInfo } from './ship-info.model';

@Component({
  selector: 'wgu-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.scss'],
})
export class ShipInfoComponent implements OnInit {
  starshipSub!: Subscription;
  shipInfo!: IShipInfo[];
  shipName!: string;
  showLoader!: boolean;

  constructor(
    private route: ActivatedRoute,
    private starshipsService: StarshipsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.showLoader = true;
    if (id) {
      this.starshipSub = this.starshipsService
        .getStarshipById(id)
        .pipe(finalize(() => (this.showLoader = false)))
        .subscribe({
          next: (starship: IStarship) => {
            const {
              name,
              model,
              manufacturer,
              cost_in_credits,
              length,
              max_atmosphering_speed,
              crew,
              passengers,
              cargo_capacity,
              consumables,
              hyperdrive_rating,
              MGLT,
              starship_class,
            } = starship;
            this.shipInfo = [
              { label: 'Model', text: model, cols: 1, rows: 1 },
              { label: 'Manufacturer', text: manufacturer, cols: 1, rows: 1 },
              {
                label: 'Cost in Credits',
                text: `₹ ${cost_in_credits}`,
                cols: 1,
                rows: 1,
              },
              { label: 'Length', text: length, cols: 1, rows: 1 },
              {
                label: 'Max Atmosphering Speed',
                text: max_atmosphering_speed,
                cols: 1,
                rows: 1,
              },
              { label: 'Crew', text: crew, cols: 1, rows: 1 },
              { label: 'Passengers', text: passengers, cols: 1, rows: 1 },
              {
                label: 'Cargo Capacity',
                text: cargo_capacity,
                cols: 1,
                rows: 1,
              },
              { label: 'Consumables', text: consumables, cols: 1, rows: 1 },
              {
                label: 'Hyperdrive Rating',
                text: hyperdrive_rating,
                cols: 1,
                rows: 1,
              },
              { label: 'MGLT', text: MGLT, cols: 1, rows: 1 },
              {
                label: 'Starship Class',
                text: starship_class,
                cols: 1,
                rows: 1,
              },
            ];
            this.shipName = name;
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.starshipSub.unsubscribe();
  }
}
