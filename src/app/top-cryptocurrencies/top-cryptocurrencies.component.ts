import { Component, OnInit } from '@angular/core';
import { CoindataService } from '../services/coindata.service';

@Component({
  selector: 'app-top-cryptocurrencies',
  templateUrl: './top-cryptocurrencies.component.html',
  styleUrls: ['./top-cryptocurrencies.component.scss']
})
export class TopCryptocurrenciesComponent implements OnInit {
  public coindataTable1: any = null;

  constructor(
    private coindataService: CoindataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.coindataService.getTable1().subscribe(data => this.coindataTable1 = data);
  }
}
