import { useState } from 'react';
import { IState } from '../../Common/interface';
import { TreeNode } from './Utils/TreeUtils';
import TreeView from './Utils/TreeView';
import { insertNodes, validation } from './Utils/TrieUtils';
const initialValues = ['app', 'apple', 'ap', 'arrow', 'approve'];
const Trie = () => {
  const [root, setroot] = useState<any>(
    insertNodes(new TreeNode('⭐'), initialValues)
  );
  const [curVal, setCurVal] = useState(JSON.stringify(initialValues));
  const submit = (values: IState) => {
    const words = values.input;
    const retriggerRoot = insertNodes(new TreeNode('⭐'), JSON.parse(words));
    setroot(retriggerRoot);
    setCurVal(words);
  };
  return (
    <div className="big-font">
      <TreeView
        root={root}
        validation={validation}
        submit={submit}
        initialValues={curVal}
        title="Insert words to Trie"
      />
    </div>
  );
};

export default Trie;
