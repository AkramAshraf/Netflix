// Packages
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FAQ from './pages/FAQ.jsx';
import HelpCenter from "./pages/Help Center";
import Account from "./pages/Account.jsx";
import MediaCenter from './pages/Media Center';
import InvestorRelations from './pages/Investor Relations.jsx'
import Jobs from './pages/Jobs';

// bootstrap customization
import "./bootstrap-customize.scss";

ReactDOM.render(
  <Fragment>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Help Center" component={HelpCenter} />
        <Route path='/Account' component={Account} />
        <Route path="/Media Center" component={MediaCenter} />
        <Route path='/Investor Relations' component={InvestorRelations} />
        <Route path='/Jobs' component={Jobs} />
      </Switch>
    </Router>
  </Fragment>,
  document.getElementById("root")
);
