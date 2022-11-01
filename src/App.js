import { HashRouter, Route } from "react-router-dom";
import Result from './routes/Result';
import Home from './routes/Home';
import Nav from './components/Nav';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path='/' exact={true} component={Home} />
      <Route path='/result' exact={true} component={Result} />
    </HashRouter>
  )
}

export default App;
