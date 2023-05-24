// asset.model.ts
export class Asset {
  value: number;
  children: Asset[];
  percent: number;

  constructor(value: number = 0, percent: number = 0) {
    this.value = value;
    this.children = [];
    this.percent = percent;
  }

  addChild(child: Asset) {
    this.children.push(child);
  }

  calculateValue(): number {
    this.value = this.children.reduce((total, child) => {
      return total + child.calculateValue();
    }, 0);
    return this.value;
  }


}
