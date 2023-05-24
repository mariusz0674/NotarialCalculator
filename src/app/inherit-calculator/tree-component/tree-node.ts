export class TreeNode {
  value: number = 0;
  name: string = '';
  percent: number = 0;
  isFinal: boolean = true;
  generation: number = 0;
  isSelected: boolean = false;
  children: TreeNode[] = [];

}
