import logo from './logo.svg';
import './App.css';
import NavRouter from './components/NavRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

//npx json-server --watch ./src/assets/videosBD.json --port 8000
function App() {
  return (
    <NavRouter></NavRouter>
  );
}

export default App;
