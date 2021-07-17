import { useState } from 'react';
import { IState } from '../../Common/interface';
import { deserializeBFS_Binary, validation } from './Utils/TreeUtils';
import TreeView from './Utils/TreeView';
const initialValues = '1,2,3,*,*,4,5';
const BinaryTreeBFS = () => {
  const [root, setroot] = useState<any>(deserializeBFS_Binary(initialValues));
  const [curVal, setCurVal] = useState(initialValues);
  const submit = (values: IState) => {
    const tree = values.input;
    setCurVal(tree);
    setroot(deserializeBFS_Binary(tree));
  };
  return (
    <TreeView
      root={root}
      submit={submit}
      validation={validation}
      initialValues={curVal}
      title="Binary Tree in BFS"
    />
  );
};

export default BinaryTreeBFS;
