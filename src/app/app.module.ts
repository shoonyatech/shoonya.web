import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CopyrightComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
