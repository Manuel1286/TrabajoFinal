import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './component/about/about.component';
import { CONTACTComponent } from './component/contact/contact.component';
import { FEATRESComponent } from './component/featres/featres.component';
import { FOOTERComponent } from './component/footer/footer.component';

import { NAVBARComponent } from './component/navbar/navbar.component';
import { PORTFOLIOComponent } from './component/portfolio/portfolio.component';
import { PRELOADERComponent } from './component/preloader/preloader.component';
import { PRINICNGComponent } from './component/prinicng/prinicng.component';
import { SLIDERComponent } from './component/slider/slider.component';
import { TEAMComponent } from './component/team/team.component';
import { TESTIMONIALComponent } from './component/testimonial/testimonial.component';

const routes: Routes = [
  
  {path:'', component:NAVBARComponent}, 
  {path:'portfolio', component: PORTFOLIOComponent},
  {path:'portfolio', component: PORTFOLIOComponent},
  {path:'preloader', component: PRELOADERComponent},
  {path:'prinicng', component:PRINICNGComponent},
  {path:'slider', component:SLIDERComponent},
  {path:'team', component:TEAMComponent},
  {path:'testimonial', component:TESTIMONIALComponent},
  {path:'about', component:ABOUTComponent},
  {path:'contact', component:CONTACTComponent},
  {path:'featres', component:FEATRESComponent},
  {path:'footer', component:FOOTERComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
