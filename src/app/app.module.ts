import { NgModule } from '@angular/core';
//import { NgxGraphModule } from '@swimlane/ngx-graph';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {InheritCalculatorComponent} from "./inherit-calculator/inherit-calculator.component";
import { AssetsDivisionCalculatorComponent } from './assets.division.calculator/assets.division.calculator.component';
 import { TreeComponentComponent } from './inherit-calculator/tree-component/tree-component.component';
import { TreeNodeComponent } from './inherit-calculator/tree-component/tree-node/tree-node.component';
// import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    InheritCalculatorComponent,
    InheritCalculatorComponent,
    AssetsDivisionCalculatorComponent,
    TreeComponentComponent,
    TreeNodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgxGraphModule,
    // MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ng build --output-path docs --base-href /NotarialCalculator/
