import './App.css';
import PositionsPanel from './components/PositionsPanel/PositionsPanel';
import AccordionContainer from './containers/AccordionContainer/AccordionContainer';

function App() {
  return (
    <div className='App'>
      <div className='info-panel'>
        <AccordionContainer />
      </div>
      <div className='tools-container'>
        <div className='tools-2-container'>
          <div className='allocation-info-panel'>Allocation Info Panel</div>
          <div className='performance-panel'>Performance Panel</div>
        </div>
        <div className='positions'>
          Positions Panel
          <PositionsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
