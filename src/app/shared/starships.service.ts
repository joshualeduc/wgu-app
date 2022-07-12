import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IStarship } from './starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  private starshipsUrl = 'assets/starships.json';
  private starshipIdUrl = 'https://swapi.dev/api/starships/';
  private starshipsWithPilotsUrl = 'assets/starshipsWithPilots.json';

  constructor(private http: HttpClient) {}

  getStarships(): Observable<IStarship[]> {
    return this.http
      .get<IStarship[]>(this.starshipsUrl)
      .pipe(catchError(this.handleError));
  }

  getStarshipById(id: string): Observable<IStarship> {
    return this.http
      .get<IStarship>(`${this.starshipIdUrl}${id}/`)
      .pipe(catchError(this.handleError));
  }

  getStarshipsWithPilots(): Observable<IStarship[]> {
    return this.http
      .get<IStarship[]>(this.starshipsWithPilotsUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Client-side or network
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Bad response from server
      errorMessage = `Error code: ${err.status}, message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
