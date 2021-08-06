import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import FormPage from './components/FormPage';
import ThankYouPage from './components/ThankYouPage';


function App() {
  return (
    <Router>
      <div className="App">
      <Route path="/" exact component={MainPage}/>
        <Route path="/form" component={FormPage}/>
        <Route path="/thankyou" component={ThankYouPage}/>
      </div>
    </Router>
  );
}

export default App;
