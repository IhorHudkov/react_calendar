import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fillCalendar from '../fillCalendar';
import '../styles/Calendar.scss';
import SelectForCalendar from './SelectForCalendar';

export default function Calendar() {
  useEffect(() => { fillCalendar('all'); });
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Calendar</span>
          <div className="btn__group">
            <div className="input-group mb-3 select-names">
              <label className="input-group-text" htmlFor="participants">Participants</label>
              <SelectForCalendar />
            </div>
            <Link to="/react_calendar/create-event" className="btn btn-success" role="button" id="new-event-btn">New event +</Link>
          </div>
        </div>
      </nav>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th id="Mon">Mon</th>
            <th id="Tue">Tue</th>
            <th id="Wed">Wed</th>
            <th id="Thu">Thu</th>
            <th id="Fri">Fri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="10">10:00</th>
            <td headers="Mon 10" />
            <td headers="Tue 10" />
            <td headers="Wed 10" />
            <td headers="Thu 10" />
            <td headers="Fri 10" />
          </tr>
          <tr>
            <th id="11">11:00</th>
            <td headers="Mon 11" />
            <td headers="Tue 11" />
            <td headers="Wed 11" />
            <td headers="Thu 11" />
            <td headers="Fri 11" />
          </tr>
          <tr>
            <th id="12">12:00</th>
            <td headers="Mon 12" />
            <td headers="Tue 12" />
            <td headers="Wed 12" />
            <td headers="Thu 12" />
            <td headers="Fri 12" />
          </tr>
          <tr>
            <th id="13">13:00</th>
            <td headers="Mon 13" />
            <td headers="Tue 13" />
            <td headers="Wed 13" />
            <td headers="Thu 13" />
            <td headers="Fri 13" />
          </tr>
          <tr>
            <th id="14">14:00</th>
            <td headers="Mon 14" />
            <td headers="Tue 14" />
            <td headers="Wed 14" />
            <td headers="Thu 14" />
            <td headers="Fri 14" />
          </tr>
          <tr>
            <th id="15">15:00</th>
            <td headers="Mon 15" />
            <td headers="Tue 15" />
            <td headers="Wed 15" />
            <td headers="Thu 15" />
            <td headers="Fri 15" />
          </tr>
          <tr>
            <th id="16">16:00</th>
            <td headers="Mon 16" />
            <td headers="Tue 16" />
            <td headers="Wed 16" />
            <td headers="Thu 16" />
            <td headers="Fri 16" />
          </tr>
          <tr>
            <th id="17">17:00</th>
            <td headers="Mon 17" />
            <td headers="Tue 17" />
            <td headers="Wed 17" />
            <td headers="Thu 17" />
            <td headers="Fri 17" />
          </tr>
          <tr>
            <th id="18">18:00</th>
            <td headers="Mon 18" />
            <td headers="Tue 18" />
            <td headers="Wed 18" />
            <td headers="Thu 18" />
            <td headers="Fri 18" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};