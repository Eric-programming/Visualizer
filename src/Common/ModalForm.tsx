import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CommonForm from "./Form";

type Props = {
  submit: (values: any) => void;
  title: string;
  validation: (values: any) => any;
  initialValues: any;
};
const ModalForm = ({ submit, title, validation, initialValues }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // MAIN
  const save = (values: any) => {
    submit(values);
    handleClose();
  };
  // MAIN
  return (
    <>
      <Button className="mt-3" variant="dark" onClick={handleShow}>
        {title}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommonForm
            save={save}
            initialValues={initialValues}
            validation={validation}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
