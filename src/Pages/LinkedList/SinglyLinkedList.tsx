import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IState } from "../../Common/interface";
import ConverterView from "./Utils/ConverterView";
import {
  convertLinkedListToEdgesList,
  validationNonCircular,
} from "./Utils/LinkedlistUtils";
const initialValues = "[1,2,3,4]";

const SinglyLinkedList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams;
  const [state, setstate] = useState(
    convertLinkedListToEdgesList(initialValues)
  );
  const submit = (values: IState) => {
    const { input } = values;
    setstate(convertLinkedListToEdgesList(input));
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

export default SinglyLinkedList;
