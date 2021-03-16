import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import SelectForCreateEventPage from './SelectForCreateEventPage';
import '../styles/create-event.scss';
import createEventFormHandler from '../applicationScripts/createEventFormScript';

function CreateEventForm() {
    useEffect(createEventFormHandler);
    return (
        <>
            <p>
                <span className="error-msg">Failed to create an event. Time slot is already booked.</span>
            </p>
            <div className="form-container">
                <form name="eventForm">
                    <input
                        id="name"
                        className="form-control text-field"
                        type="text"
                        placeholder="Name of the event"
                        maxLength="60"
                    />
                   <SelectForCreateEventPage />
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="day">Day</label>
                        <select className="form-select" id="day">
                            <option defaultValue>Choose...</option>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="time">Time</label>
                        <select className="form-select" id="time">
                            <option defaultValue>Choose...</option>
                            <option value="10">10-00</option>
                            <option value="11">11-00</option>
                            <option value="12">12-00</option>
                            <option value="13">13-00</option>
                            <option value="14">14-00</option>
                            <option value="15">15-00</option>
                            <option value="16">16-00</option>
                            <option value="17">17-00</option>
                            <option value="18">18-00</option>
                        </select>
                    </div>
                    <div className="submit-wrapper">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/react_calendar" className="btn btn-success" role="button" >Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateEventForm;