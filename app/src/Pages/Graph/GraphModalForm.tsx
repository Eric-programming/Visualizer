import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import GraphForm from "./GraphForm";
import { IGraph } from "./GraphUtil";

type Props = {
  getGraph: (graph: IGraph) => void;
};
const GraphModalForm = ({ getGraph }: Props) => {
  const [show, setShow] = useState(false);
  const title = "Input Graph";
  const handleClose = () => setShow(false);
  const save = (graph: IGraph) => {
    getGraph(graph);
    handleClose();
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {title}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GraphForm save={save} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GraphModalForm;
