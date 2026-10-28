import './App.css';
// import Counter from './components/Counter';
import Rating from './components/Rating';

const App = () => {
  const name = "Dev";
  return (
    <>
      <h1>Hello { name }</h1>
      <Rating heading="How do you feel about React?" feedbackMessage={['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']}/>
      {/* <Counter /> */}
    </>
  );
}

export default App
