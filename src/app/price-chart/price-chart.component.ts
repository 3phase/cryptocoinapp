import { Component, OnInit } from '@angular/core';
import { CoindataService } from '../services/coindata.service';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements OnInit {
  public coindataTable1: any = null;
  public data: any[] = [];

  constructor(
    private coindataService: CoindataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.coindataService.getTable1().subscribe(data => this.coindataTable1 = data);
    this.coindataService.getCoinData().subscribe(data => this.data = data);
  }
}
