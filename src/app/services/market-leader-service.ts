import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockLeader} from '../models/StockLeader-model'

@Injectable({
  providedIn: 'root'
})
export class MarketLeaderService {

  constructor(private httpClient : HttpClient) { }


  getStockLeader(stockCategory :string)
  {
    return this.httpClient.get<StockLeader[]>('/api/stockLeader')
  }


}


