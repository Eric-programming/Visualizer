import CommonForm from '../../../Common/Form';
import { IState } from '../../../Common/interface';
type Props = {
  submit: (values: IState) => void;
  initialValues: any;
  validation: (values: IState) => any;
  res: any;
};
const ConverterView = ({ res, submit, initialValues, validation }: Props) => {
  return (
    <>
      <CommonForm
        validation={validation}
        initialValues={{ input: initialValues }}
        save={submit}
      />
      <hr />
      <div className="text-center">
        <textarea value={JSON.stringify(res)} readOnly={true} />
      </div>
    </>
  );
};

export default ConverterView;
