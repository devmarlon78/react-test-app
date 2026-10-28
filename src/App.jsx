import './App.css';
import Rating from './components/Rating';

function App() {
  const name = "Dev";
  return (
    <>
      <h1>Hello { name }</h1>
      <Rating />
    </>
  );
}

export default App
