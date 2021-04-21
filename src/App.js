import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryState from './context/country/countryState';
import './customize.scss';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ViewLocation from './pages/ViewLocation';
function App() {
  return (
    <CountryState>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/location" component={ViewLocation} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </CountryState>
  );
}

export default App;
