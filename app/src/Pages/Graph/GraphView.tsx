import { useState } from "react";
import { Graph } from "react-d3-graph";
import GraphModalForm from "./GraphModalForm";
import { IGraph } from "./GraphUtil";

const myConfig = {
  automaticRearrangeAfterDropNode: true,
  nodeHighlightBehavior: true,
  height: window.innerHeight,
  width: window.innerWidth,
  node: {
    color: "green",
    size: 320,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "red",
  },
};
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};
const GraphView = () => {
  const [state, setstate] = useState(data);
  const getGraph = (graph: IGraph) => {
    console.log("graph", graph);
    setstate(graph);
  };

  return (
    <>
      <GraphModalForm getGraph={getGraph} />
      <Graph id="graph-id" data={state} config={myConfig} />
    </>
  );
};

export default GraphView;
