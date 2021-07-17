import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Draggable from 'react-draggable';

const Drag = () => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return (
    <Draggable>
      <h1>
        <span style={{ color: randomColor() }}>&#8593;</span>
      </h1>
    </Draggable>
  );
};

const Dragger = () => {
  const [state, setstate] = useState<any>([]);
  const addPointer = () => {
    let pointers = 0;
    try {
      pointers = JSON.parse(prompt('How about pointers') ?? '1');
    } catch (error) {
      pointers = 1;
    }
    const arr = [];
    for (let index = 0; index < pointers; index++) {
      arr.push(Drag());
    }
    setstate(arr);
  };
  return (
    <>
      {state.map((Ele: any, index: number) => (
        <div key={index}>{Ele}</div>
      ))}
      <Button variant="primary" onClick={addPointer}>
        Add Pointer
      </Button>
    </>
  );
};

export default Dragger;
