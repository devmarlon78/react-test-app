import './App.css';

const Calculator = (props) => {
  return "This is a Component: " + props.sum ;
}

function App() {
  return (
    <>
      <div>
        {/* { Calculator() } */}
        <Calculator sum={4} />
      </div>
    </>
  );
}

export default App
