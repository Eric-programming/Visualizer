import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DirectedGraph from './Pages/Graph/DirectedGraph';
import UndirectedGraph from './Pages/Graph/UndirectedGraph';
import {
  BINARY_TREE_BFS,
  BINARY_TREE_DFS,
  CIRCULAR_LL,
  DIRECTED_GRAPH,
  DOUBLY_LL,
  NARY_TREE_BFS,
  SINGLY_LL,
  TRIE,
  UNDIRECTED_GRAPH,
} from './Constants/Routes';
import Navigation from './Common/Navigation';
import Landing from './Pages/Landing';
import BinaryTreeBFS from './Pages/Tree/BinaryTreeBFS';
import BinaryTreeDFS from './Pages/Tree/BinaryTreeDFS';
import NaryTreeBFS from './Pages/Tree/NaryTreeBFS';
import Trie from './Pages/Tree/Trie';
import CircularLinkedList from './Pages/LinkedList/CircularLinkedList';
import DoublyLinkedList from './Pages/LinkedList/DoublyLinkedList';
import SinglyLinkedList from './Pages/LinkedList/SinglyLinkedList';
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path={`/${DIRECTED_GRAPH}`}>
            <DirectedGraph />
          </Route>
          <Route path={`/${UNDIRECTED_GRAPH}`}>
            <UndirectedGraph />
          </Route>
          <Route path={`/${BINARY_TREE_BFS}`}>
            <BinaryTreeBFS />
          </Route>
          <Route path={`/${BINARY_TREE_DFS}`}>
            <BinaryTreeDFS />
          </Route>
          <Route path={`/${NARY_TREE_BFS}`}>
            <NaryTreeBFS />
          </Route>
          <Route path={`/${TRIE}`}>
            <Trie />
          </Route>
          <Route path={`/${CIRCULAR_LL}`}>
            <CircularLinkedList />
          </Route>
          <Route path={`/${DOUBLY_LL}`}>
            <DoublyLinkedList />
          </Route>
          <Route path={`/${SINGLY_LL}`}>
            <SinglyLinkedList />
          </Route>
          <Route path={`/`}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
