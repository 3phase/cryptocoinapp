import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoindataService {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/58847cca258947f3b287241ff14b4062`);
  }

  public getCoinData(): Observable<any[]> {
    return this.http.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=720`)
      .pipe(
        take(1),
        map((data: any) => data.Data.Data)
      );
  }
}
