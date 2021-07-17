import GraphView from './Utils/GraphView';

const UndirectedGraph = () => {
  return (
    <GraphView id="undirected-graph" currentConfig={{ directed: false }} />
  );
};

export default UndirectedGraph;
