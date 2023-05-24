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
    node.value = moneyToDistribute * node.percent/100;
    for(let child of node.children){
      this.clacNode(child, node.value);
    }
  }

  delChildRec(nodePossition: TreeNode, nodeToDell: TreeNode){
    for(let child of nodePossition.children){
      if(child === nodeToDell){
        nodePossition.children.splice(nodePossition.children.indexOf(child), 1);
      }
      else{
        this.delChildRec(child, nodeToDell);
      }
    }
  }
  deleteNode(treeRoot: TreeNode, treeNodetoDell: TreeNode) {
    this.delChildRec(treeRoot, treeNodetoDell);
  }

}
