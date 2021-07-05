import { Formik, Form, Field, ErrorMessage } from "formik";
import { convertEdgesToLink, convertInputToData, IGraph, IState, validation } from "./GraphUtil";

const initialValues: IState = { graph: "" };

type Props = {
  save: (graph: IGraph) => void;
};
const GraphForm = ({ save }: Props) => {
  const submit = (values: any) => {
    const matrix = convertInputToData(values.graph);
    const graph = convertEdgesToLink(matrix);
    save(graph);
  };
  return (
    <Formik initialValues={initialValues} validate={validation} onSubmit={submit}>
      {({ errors, handleSubmit }) => (
        <Form className="text-center" onSubmit={handleSubmit}>
          <Field type="graph" name="graph" />
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Save
          </button>
          <br />
          <span className="text-danger">
            <ErrorMessage name="graph" component="div" />
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default GraphForm;
