import { React, useEffect } from 'react';
import '../styles/select.scss';
import selectForCalendar from '../select-for-calendar';

function SelectForCalendar () {
    useEffect(selectForCalendar,[]);
    return (
        <div className="multipleSelection">
                <div className="selectBox">
                  <select className="form-select" id="participants">
                    <option defaultValue>Choose...</option>
                  </select>
                  <div className="overSelect" />
                </div>
                <div id="checkBoxes">
                  <label htmlFor="first">
                    <input type="checkbox" id="first" defaultChecked />
                    All members
                  </label>
                  <label htmlFor="second">
                    <input type="checkbox" id="second" defaultChecked />
                    Jhon
                  </label>
                  <label htmlFor="third">
                    <input type="checkbox" id="third" defaultChecked />
                    Mila
                  </label>
                  <label htmlFor="fourth">
                    <input type="checkbox" id="fourth" defaultChecked />
                    Sam
                  </label>
                  <label htmlFor="fifth">
                    <input type="checkbox" id="fifth" defaultChecked />
                    Molly
                  </label>
                  <label htmlFor="sixth">
                    <input type="checkbox" id="sixth" defaultChecked />
                    Garry
                  </label>
                  <label htmlFor="seventh">
                    <input type="checkbox" id="seventh" defaultChecked />
                    Liza
                  </label>
                  <label htmlFor="eighth">
                    <input type="checkbox" id="eighth" defaultChecked />
                    Mike
                  </label>
                </div>
              </div>
            
    );
}

export default SelectForCalendar;