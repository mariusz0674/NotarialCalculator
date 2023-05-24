import {Component, OnInit} from '@angular/core';
import {TreeNode} from "./tree-node";
import {TreeService} from "./tree-node/tree.service";

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent implements OnInit {
  root: TreeNode | null = null;
  selectedNode?: TreeNode;
  private treeService: TreeService;

  constructor(treeSeervice: TreeService){
    this.treeService = treeSeervice;
  }

  addNode(name: string) {
    const newNode = new TreeNode();
    newNode.name = name;

    if (!this.root) {
      this.root = newNode;
      this.root.isFinal = false;
    } else if (this.selectedNode) {
      this.selectedNode.isFinal = false;
      this.selectedNode.children.push(newNode);
      this.uncheckNode(this.selectedNode);

    }

    this.selectedNode = this.root;
  }

  uncheckNode(node: TreeNode) {
    node.isSelected = false;
  }

  selectNode(node: TreeNode) {
    this.selectedNode!.isSelected = false;
    this.selectedNode = node;
  }

  ngOnInit(): void {
    const newNode = new TreeNode();
    newNode.name = 'Zmarly';
    this.root = newNode;
    this.selectedNode = this.root;
    //this.root.isFinal = true;
  }

  calculateTree(){
    this.treeService.calcTree(this.root!);
  }

  deleteNode() {
    this.treeService.deleteNode(this.root!, this.selectedNode!);
  }

}
