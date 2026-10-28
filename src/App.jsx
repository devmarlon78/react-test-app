import './App.css';
import Counter from './components/Counter';
import Rating from './components/Rating';

const App = () => {
  const name = "Dev";
  return (
    <>
      <h1>Hello { name }</h1>
      <Rating />
      {/* <Counter /> */}
    </>
  );
}

export default App
