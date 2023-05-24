import { Component } from '@angular/core';
import { Asset } from './asset';

@Component({
  selector: 'app-inherit-calculator',
  templateUrl: './inherit-calculator.component.html',
  styleUrls: ['./inherit-calculator.component.css']
})
export class InheritCalculatorComponent {
  root = new Asset();

  addAsset(asset: Asset) {
    asset.addChild(new Asset());
  }

  calculate() {
    this.root.calculateValue();
  }
}
