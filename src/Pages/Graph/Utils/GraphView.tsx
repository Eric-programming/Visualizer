import { useState } from "react";
import { Button } from "react-bootstrap";
import { Graph } from "react-d3-graph";
import { IState } from "../../../Common/interface";
import ModalForm from "../../../Common/ModalForm";
import {
  convertEdgesToLink,
  convertInputToData,
  IGraph,
  validation,
} from "./GraphUtil";

const commonConfig = {
  automaticRearrangeAfterDropNode: true,
  nodeHighlightBehavior: true,
  height: window.innerHeight,
  width: window.innerWidth,
  node: {
    color: "green",
    size: 320,
    highlightStrokeColor: "blue",
  },
  initialZoom: 3,

  link: {
    highlightColor: "red",
  },
};
const data: IGraph = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
    { source: "Harry", target: "Harry" },
  ],
};
type Props = {
  currentConfig: any;
  id: string;
};
const GraphView = ({ currentConfig, id }: Props) => {
  const [state, setstate] = useState(data);
  const getGraph = (values: IState) => {
    const matrix = convertInputToData(values.input);
    const graph: IGraph = convertEdgesToLink(matrix);
    setstate(graph);
  };

  return (
    <>
      <ModalForm
        initialValues={{ input: "[[1,2],[1,3],[1,4]]" }}
        validation={validation}
        submit={getGraph}
        title="Input as Edges"
      />
      {"\n"}
      <br />

      <Graph
        id={id}
        data={state}
        config={{ ...commonConfig, ...currentConfig }}
      />
    </>
  );
};

export default GraphView;
