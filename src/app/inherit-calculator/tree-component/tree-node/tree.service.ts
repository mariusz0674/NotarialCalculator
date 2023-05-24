import { Injectable } from '@angular/core';
import {TreeNode} from "../tree-node";

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }


  calcTree(root: TreeNode){
    for(let child of root.children){
      this.clacNode(child, root.value);
    }
  }

  clacNode(node: TreeNode, moneyToDistribute: number){
    node.value = moneyToDistribute * node.percent;
    for(let child of node.children){
      this.clacNode(child, node.value);
    }
  }
}
