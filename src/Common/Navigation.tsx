import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BINARY_TREE_DFS,
  BINARY_TREE_BFS,
  DIRECTED_GRAPH,
  NARY_TREE_BFS,
  UNDIRECTED_GRAPH,
  TRIE,
  SINGLY_LL,
  DOUBLY_LL,
  CIRCULAR_LL,
} from '../Constants/Routes';
import Dragger from './Dragger';

const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="#home">Visualizer</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* Graph */}
        <NavDropdown title="Graph" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={`/${DIRECTED_GRAPH}`}>Directed Graph</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={`/${UNDIRECTED_GRAPH}`}>Undirected Graph</Link>
          </NavDropdown.Item>
        </NavDropdown>
        {/* Graph */}
        {/* Tree */}
        <NavDropdown title="Tree" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={`/${BINARY_TREE_DFS}`}>Binary Tree DFS</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={`/${BINARY_TREE_BFS}`}>Binary Tree BFS</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={`/${NARY_TREE_BFS}`}>Nary Tree BFS</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={`/${TRIE}`}>Trie</Link>
          </NavDropdown.Item>
        </NavDropdown>
        {/* Tree */}
        {/* LinkedList */}
        <NavDropdown title="LinkedList" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={`/${SINGLY_LL}`}>Singly LinkedList</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={`/${DOUBLY_LL}`}>Doubly LinkedList</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={`/${CIRCULAR_LL}`}>Circular LinkedList</Link>
          </NavDropdown.Item>
        </NavDropdown>
        {/* LinkedList */}
      </Nav>
      <Nav>
        <Dragger />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
