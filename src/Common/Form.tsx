import { Formik, Form, Field, ErrorMessage } from 'formik';

type Props = {
  save: (values: any) => void;
  initialValues: any;
  validation: (values: any) => any;
};
const CommonForm = ({ save, initialValues, validation }: Props) => {
  const submit = (values: any) => save(values);
  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={submit}
    >
      {({ errors, handleSubmit }) => (
        <Form className="text-center" onSubmit={handleSubmit}>
          <Field as="textarea" name="input" />
          <br />
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Save
          </button>
          <span className="text-danger">
            <ErrorMessage name="input" component="div" />
          </span>
        </Form>
      )}
    </Formik>
  );
};

export default CommonForm;
