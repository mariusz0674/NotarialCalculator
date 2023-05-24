// asset.model.ts
export class AssetModel {
  value: number;
  parent!: AssetModel;
  percent: number;

  isFinal: boolean = true;
  generation: number = 0;
  name: string = '';

  constructor(value: number = 0, percent: number = 0, generation: number = 0, parent?: AssetModel) {
    this.parent = parent!;
    this.value = value;
    this.generation = generation;
    this.percent = percent;
  }

  setNotFinal(){
    this.isFinal = false;
  }

  // addChild(child: AssetModel) {
  //   this.children.push(child);
  // }

  // calculateValue(): number {
  //   this.value = this.children.reduce((total, child) => {
  //     return total + child.calculateValue();
  //   }, 0);
  //   return this.value;
  // }
}
