import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MarketComponent } from './market/market.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'recommendation', component: RecommendationComponent},
  { path:'market', component: MarketComponent},
  { path:'subscribe', component: SubscribeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
