import Tree from 'react-d3-tree';
import { IState } from '../../../Common/interface';
import ModalForm from '../../../Common/ModalForm';
type Props = {
  submit: (values: IState) => void;
  title: string;
  initialValues: any;
  root: any;
  validation: (values: IState) => any;
};
const TreeView = ({
  submit,
  title,
  initialValues,
  root,
  validation,
}: Props) => {
  if (root === null) return null;
  return (
    <>
      <ModalForm
        submit={submit}
        title={title}
        validation={validation}
        initialValues={{ input: initialValues }}
      />
      <div id="treeWrapper" style={{ width: '140em', height: '60em' }}>
        <Tree
          data={root}
          orientation="vertical"
          pathFunc="straight"
          collapsible={false}
        />
      </div>
    </>
  );
};

export default TreeView;
