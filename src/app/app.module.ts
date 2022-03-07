import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRELOADERComponent } from './component/preloader/preloader.component';
import { NAVBARComponent } from './component/navbar/navbar.component';
import { SLIDERComponent } from './component/slider/slider.component';
import { FEATRESComponent } from './component/featres/featres.component';
import { PORTFOLIOComponent } from './component/portfolio/portfolio.component';
import { PRINICNGComponent } from './component/prinicng/prinicng.component';
import { ABOUTComponent } from './component/about/about.component';
import { TESTIMONIALComponent } from './component/testimonial/testimonial.component';
import { TEAMComponent } from './component/team/team.component';
import { CONTACTComponent } from './component/contact/contact.component';
import { FOOTERComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NuevoModule } from './nuevo/nuevo.module';

@NgModule({
  declarations: [
    AppComponent,
    PRELOADERComponent,
    NAVBARComponent,
    SLIDERComponent,
    FEATRESComponent,
    PORTFOLIOComponent,
    PRINICNGComponent,
    ABOUTComponent,
    TESTIMONIALComponent,
    TEAMComponent,
    CONTACTComponent,
    FOOTERComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    CommonModule,
    RouterModule,
    NuevoModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
