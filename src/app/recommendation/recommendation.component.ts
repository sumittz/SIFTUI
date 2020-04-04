import { Component, OnInit } from '@angular/core';
import { MarketLeaderService } from '../services/market-leader-service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  stockLeaderList:string[];


  constructor(private httpStockLeaderService:MarketLeaderService) { }

  ngOnInit() {
    this.httpStockLeaderService.getStockLeader('LARGE').subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response:any)
  {
    this.stockLeaderList=response;
  }


}
