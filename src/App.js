import './App.css';
import modules from './modules.json'
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Home modules={modules}/>
    </div>
  );
}

export default App;
