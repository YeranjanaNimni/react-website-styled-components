
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from './GlobalStyles';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
