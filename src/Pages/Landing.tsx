import { Alert } from 'react-bootstrap';

const Landing = () => {
  return (
    <Alert style={{ margin: '1%' }} variant="success">
      <Alert.Heading>Welcome to Visualizer</Alert.Heading>
      <p>This is where all the magic happens</p>
    </Alert>
  );
};

export default Landing;
