import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
