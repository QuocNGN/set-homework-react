import './App.css';
import ComponentA from './components/componentA/ComponentA';
import { NumberProvider } from './context/NumberContext';

function App() {
  return (
    // <div className="App">
      <NumberProvider>
        <ComponentA />
      </NumberProvider>
    // </div>
  );
}

export default App;
