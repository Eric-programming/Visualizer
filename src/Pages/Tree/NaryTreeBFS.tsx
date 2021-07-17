import { useState } from 'react';
import { IState } from '../../Common/interface';
import { deserializeBFS_Nary, validation } from './Utils/TreeUtils';
import TreeView from './Utils/TreeView';
const initialValues =
  '1,*,2,3,4,5,*,*,6,7,*,8,*,9,10,*,*,11,*,12,*,13,*,*,14,*,*,*,*';
const NaryTreeBFS = () => {
  const [root, setroot] = useState<any>(deserializeBFS_Nary(initialValues));
  const [curVal, setCurVal] = useState(initialValues);
  const submit = (values: IState) => {
    const tree = values.input;
    setCurVal(tree);
    setroot(deserializeBFS_Nary(tree));
  };
  return (
    <TreeView
      root={root}
      submit={submit}
      validation={validation}
      initialValues={curVal}
      title="Nary Tree in BFS"
    />
  );
};

export default NaryTreeBFS;
