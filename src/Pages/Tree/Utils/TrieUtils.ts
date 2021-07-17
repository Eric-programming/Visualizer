import { IState } from '../../../Common/interface';
import { TreeNode } from './TreeUtils';

export const insertNode = (root: TreeNode, word: string) => {
  let curNode = root;
  const arr: string[] = word.split('');
  arr.forEach((curChar: string) => {
    let childNode = curNode.children.find(
      (child: any) => child && child.name === curChar
    );
    if (!childNode) {
      childNode = new TreeNode(curChar);
      curNode.children.push(childNode);
    }
    curNode = childNode;
  });
  return root;
};

export const insertNodes = (root: TreeNode, words: string[]) => {
  words.forEach((word: string) => {
    insertNode(root, word);
  });
  return root;
};
export const validation = (values: IState): any => {
  const words = values.input;
  if (!words) {
    return { input: 'words list is required' };
  }
  if (words.indexOf(' ') >= 0) {
    return { input: "You can't have space" };
  }
  try {
    const list = JSON.parse(words);
    if (!Array.isArray(list)) throw new Error();
  } catch (error) {
    return { input: 'invalid list of strings' };
  }

  return {};
};
