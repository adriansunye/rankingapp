
import './App.scss';
import FilterButtons from './components/layout/organization/filterButtons/FilterButtons';
import AppView from './views/AppView';

function App() {
  return (
    <div className="App">
      <FilterButtons/>
      <AppView/>
    </div>
  );
}

export default App;
