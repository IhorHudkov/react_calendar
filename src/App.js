import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateEventForm from './components/CreateEventForm';
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/react_calendar">
          <Calendar />
        </Route>
        <Route path="/react_calendar/create-event">
          <CreateEventForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
