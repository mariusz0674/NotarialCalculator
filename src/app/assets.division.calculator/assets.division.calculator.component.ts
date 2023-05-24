import {Component, OnInit} from '@angular/core';
import {AssetModel} from "./asset.model";

@Component({
  selector: 'app-assets-division-calculator',
  templateUrl: './assets.division.calculator.component.html',
  styleUrls: ['./assets.division.calculator.component.css']
})
export class AssetsDivisionCalculatorComponent implements OnInit{

  allMoney: number = 0;
  assetTable: AssetModel[] = [];

  addAssetModel(parent: AssetModel) {
    const index = this.assetTable.indexOf(parent);
    parent.setNotFinal();
    if (index !== -1) {
      this.assetTable.splice(index + 1, 0, new AssetModel(0,0,parent.generation+1, parent));
    }
  }

  ngOnInit(): void {
    this.assetTable.push(new AssetModel(0,100,0));
  }

  getArray(count: number): number[] {
    return Array.from({length: count}, (_, i) => i + 1);
  }

  calculateAsset() {
    console.log(this.assetTable);
    for(let asset of this.assetTable){
      if(asset.generation === 0){
        asset.value = this.allMoney;
      }else{
        asset.value = asset.parent.value * asset.percent / 100;
      }
    }
  }
}
