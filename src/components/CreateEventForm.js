import { React, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import SelectForCreateEventPage from './SelectForCreateEventPage';
import '../styles/create-event.scss';
import { Loader } from './Loader';
import { createEvent } from '../redux/actions';

function CreateEventForm() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.app.loading);
    useEffect(
        () => {

            const form = document.forms.eventForm;
            const nameInput = form.name;
            const dayInput = form.day;
            const timeInput = form.time;

            const isNameInputCorrect = () => {
                if (!nameInput.value.trim()) {
                    nameInput.classList.add('input-error');
                    return false;
                }
                nameInput.classList.remove('input-error');
                return true;
            };

            const isDayInputCorrect = () => {
                if (dayInput.value === 'Choose...') {
                    dayInput.classList.add('input-error');
                    return false;
                }
                dayInput.classList.remove('input-error');
                return true;
            };

            const isTimeInputCorrect = () => {
                if (timeInput.value === 'Choose...') {
                    timeInput.classList.add('input-error');
                    return false;
                }
                timeInput.classList.remove('input-error');
                return true;
            };


            form.onsubmit = (e) => {
                e.preventDefault();

                if (!isNameInputCorrect() | !isDayInputCorrect() | !isTimeInputCorrect()) return;

                const participantsCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

                const participants = [];

                participantsCheckboxes.forEach((item) => {
                    const label = document.querySelector(`label[for="${item.id}"`);
                    participants.push(label.textContent.trim());
                });

                const newEvent = {
                    name: nameInput.value,
                    participants,
                    dayTime: `${dayInput.value} ${timeInput.value}`
                };
                dispatch(createEvent(newEvent));
            };
        }
    );

    if (loading) return <Loader />

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
