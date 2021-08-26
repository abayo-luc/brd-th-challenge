import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoanList from './pages/LoanList';
import LoanRequest from './pages/LoanRequest';

function App() {
  return (
    <Router>
      <div className="top-0 sticky z-50">
        <NavBar />
      </div>
      <div className="mt-10">
        <Switch>
          <Route exact path="/">
            <LoanRequest />
          </Route>
          <Route exact path="/loans">
            <LoanList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
