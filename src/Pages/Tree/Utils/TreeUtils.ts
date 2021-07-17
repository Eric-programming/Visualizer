import { IState } from '../../../Common/interface';

const NULL = '*';
const COMMA = ',';
export class TreeNode {
  name: string;
  children: TreeNode[] | any[];
  constructor(name: string, children: TreeNode[] = []) {
    this.name = name;
    this.children = children;
  }
}

//1,2,*,*,3,4,*,*,5,*,*
export const deserializeDFS_Binary = (data: string) => {
  const arr = data.split(',');
  let index = 0;
  function dfs() {
    let curVal = arr[index++];
    if (curVal === NULL) return undefined;
    const curNode = new TreeNode(curVal);
    const left = dfs();
    const right = dfs();
    if (left) {
      curNode.children[0] = left;
    }
    if (right) {
      curNode.children[1] = right;
    }
    return curNode;
  }
  return dfs();
};

//1,2,3,*,*,4,5
export const deserializeBFS_Binary = (data: string) => {
  if (data === '') {
    return null;
  }
  const values = data.split(',');
  let root = new TreeNode(values[0]);
  let queue = [root];
  for (let i = 1; i < values.length; i++) {
    const parent = queue.shift();
    if (!parent) continue;
    if (values[i] !== NULL) {
      let left = new TreeNode(values[i]);
      parent.children[0] = left;
      queue.push(left);
    }
    if (values[++i] !== NULL && i !== values.length) {
      let right = new TreeNode(values[i]);
      parent.children[1] = right;
      queue.push(right);
    }
  }
  return root;
};
//1,*,2,3,4,5,*,*,6,7,*,8,*,9,10,*,*,11,*,12,*,13,*,*,14,*,*,*,*
export const deserializeBFS_Nary = function (data: string) {
  const data_arr: string[] = data.split(COMMA);
  if (data_arr[0] === NULL) return null;
  const root = new TreeNode(data_arr[0]);
  //BFS
  const queue = [root];
  let i = 2;
  while (i < data_arr.length) {
    //Take the first element out
    const first = queue.shift();
    if (!first) break;

    //Add chilren and next level
    const children: TreeNode[] = [];
    while (data_arr[i] !== NULL) {
      const child = new TreeNode(data_arr[i++]);
      children.push(child);
      queue.push(child);
    }
    i++;

    first.children = children;
  }

  return root;
};
export const validation = (values: IState): any => {
  const tree = values.input;
  if (!tree) {
    return { input: 'tree string is required' };
  }
  const arr = tree.split('');
  arr.forEach((element) => {
    if (
      element !== '*' &&
      element !== ',' &&
      /^-?[\d.]+(?:e-?\d+)?$/.test(element) === false
    )
      return { input: 'invalid tree string' };
  });
  return {};
};
