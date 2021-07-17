import { useState } from 'react';
import { IState } from '../../Common/interface';
import { deserializeDFS_Binary, validation } from './Utils/TreeUtils';
import TreeView from './Utils/TreeView';
const initialValues = '1,2,*,*,3,4,*,*,5,*,*';
const BinaryTreeDFS = () => {
  const [curVal, setCurVal] = useState(initialValues);
  const [root, setroot] = useState<any>(deserializeDFS_Binary(initialValues));
  const submit = (values: IState) => {
    const tree = values.input;
    setCurVal(tree);
    setroot(deserializeDFS_Binary(tree));
  };
  return (
    <TreeView
      root={root}
      submit={submit}
      validation={validation}
      initialValues={curVal}
      title="Binary Tree in DFS"
    />
  );
};

export default BinaryTreeDFS;
