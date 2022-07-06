import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { StarshipsService } from 'src/app/shared/starships.service';

@Component({
  selector: 'wgu-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent implements OnInit {

  displayedColumns: string[] = [
    'name', 
    'crew', 
    'passengers', 
    'cargo_capacity', 
    'starship_class', 
    'hyperdrive_rating'
  ]
  dataSource!: MatTableDataSource<any>
  starshipSub!: Subscription;

  constructor(private starshipsService: StarshipsService) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.starshipSub = this.starshipsService.getStarships().subscribe({
      next: starships => {
        const formattedData = starships.map(ship => {
          const {name, crew, passengers, cargo_capacity, starship_class, hyperdrive_rating} = ship;
          const id: string = ship.url.split('/').filter((character: string) => character && !isNaN(+character))[0];

          return {
            name,
            crew,
            passengers,
            id,
            cargo_capacity,
            starship_class,
            hyperdrive_rating
          }
        })
        this.dataSource = new MatTableDataSource(formattedData)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  ngOnDestroy(): void {
    this.starshipSub.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
