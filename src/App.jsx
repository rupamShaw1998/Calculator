import { Provider } from 'react-redux';
import './App.css';
import Calculator from './components/calculator';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
