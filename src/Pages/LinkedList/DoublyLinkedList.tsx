import { useState } from 'react';
import { IState } from '../../Common/interface';
import ConverterView from './Utils/ConverterView';
import {
  convertLinkedListToEdgesList,
  validationNonCircular,
} from './Utils/LinkedlistUtils';
const initialValues = '[1,2,3,4]';
const DoublyLinkedList = () => {
  const [state, setstate] = useState(
    convertLinkedListToEdgesList(initialValues, true)
  );
  const submit = (values: IState) => {
    const { input } = values;
    setstate(convertLinkedListToEdgesList(input, true));
  };
  return (
    <ConverterView
      submit={submit}
      initialValues={initialValues}
      validation={validationNonCircular}
      res={state}
    />
  );
};

export default DoublyLinkedList;
