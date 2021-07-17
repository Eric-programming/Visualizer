import { useState } from 'react';
import { IState } from '../../Common/interface';
import ConverterView from './Utils/ConverterView';
import {
  convertCircularToEdgesList,
  validationCircular,
} from './Utils/LinkedlistUtils';
const initialValues = '[1,2,3,4]\n1';
const CircularLinkedList = () => {
  const [state, setstate] = useState(convertCircularToEdgesList(initialValues));
  const submit = (values: IState) => {
    const { input } = values;
    setstate(convertCircularToEdgesList(input));
  };
  return (
    <ConverterView
      submit={submit}
      initialValues={initialValues}
      validation={validationCircular}
      res={state}
    />
  );
};

export default CircularLinkedList;
