import { Component, Input, Output, EventEmitter   } from '@angular/core';
import {TreeNode} from "../tree-node";

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Output() nodeSelectedEmit = new EventEmitter<TreeNode>();

  selected: boolean = false;

  selectedNodeBridge(node: TreeNode) {
    this.nodeSelectedEmit.emit(node);
  }
  selectNode(node: TreeNode) {

    node.isSelected = !node.isSelected;
    this.selectedNodeBridge(node);

    // this.selected = !this.selected;
    // this.nodeSelected.emit(node);
  }
}
