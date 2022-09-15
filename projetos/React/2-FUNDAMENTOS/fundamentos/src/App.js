//Componentes
import FirstComponent from './components/firstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';


// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="firstDiv">
        <h1>Fundamentos</h1>
        <FirstComponent />
        <TemplateExpressions />
        <Events />

        <Challenge />
      </div>
    </div>
  );
}

export default App;
