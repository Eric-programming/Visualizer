import { IState } from '../../../Common/interface';

interface INode {
  id: string;
}
interface ILink {
  source: string;
  target: string;
}
export interface IGraph {
  nodes: INode[];
  links: ILink[];
}

export const convertInputToData = (input: string) => {
  const temp = JSON.parse(input);
  const graph: string[][] = temp.map((arr: Object[]) => {
    return arr.map((item) => {
      return JSON.stringify(item);
    });
  });
  return graph;
};
export const validation = (values: IState): any => {
  const invalidInput = (input: string) => {
    let graph;
    try {
      graph = JSON.parse(input);
    } catch (error) {
      return true;
    }
    if (!Array.isArray(graph) || graph.length === 0) return true;
    const res: boolean = graph.some(
      (subArray) => !Array.isArray(subArray) || subArray.length < 2
    );
    return res;
  };
  const graph = values.input;
  if (!graph || invalidInput(graph)) {
    return { input: 'Invalid Graph (eg. [[1,2],[3,4]])' };
  }
  return {};
};
export const convertEdgesToLink = (edges: string[][]): IGraph => {
  const graph: IGraph = {
    nodes: [],
    links: [],
  };
  const set = new Set();
  edges.forEach((edge) => {
    if (edge.length < 2) return;
    const node1 = edge[0];
    const node2 = edge[1];
    set.add({ id: node1 });
    set.add({ id: node2 });
    graph.links.push({
      source: node1,
      target: node2,
    });
  });
  const temp: INode[] = Array.from(set) as INode[];
  graph.nodes = temp;
  return graph;
};
