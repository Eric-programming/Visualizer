import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  height: window.innerHeight,
  width: window.innerWidth,
  collapsible: true,
  node: {
    color: "lightgreen",
    size: 320,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "red",
  },
};

const GraphComponent = () => {
  const onClickNode = function (nodeId: any) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source: any, target: any) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
  );
};

export default GraphComponent;
