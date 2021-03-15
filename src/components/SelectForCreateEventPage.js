import { React, useEffect } from 'react';
import selectForCreateEventPage from '../select-for-create-event-page';
import '../styles/select.scss';

function SelectForCreateEventPage () {
    useEffect(selectForCreateEventPage, []);
    return (
        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="participants"
        >Participants</label
        >
        <div className="multipleSelection">
            <div className="selectBox">
                <select className="form-select" id="participants">
                    <option defaultValue>Choose...</option>
                </select>
                <div className="overSelect" />
            </div>
            <div id="checkBoxes">
                <label htmlFor="first">
                    <input type="checkbox" id="first" />
                    All members
                </label>
                <label htmlFor="second">
                    <input type="checkbox" id="second" />
                    Jhon
                </label>
                <label htmlFor="third">
                    <input type="checkbox" id="third" />
                    Mila
                </label>
                <label htmlFor="fourth">
                    <input type="checkbox" id="fourth" />
                    Sam
                </label>
                <label htmlFor="fifth">
                    <input type="checkbox" id="fifth" />
                    Molly
                </label>
                <label htmlFor="sixth">
                    <input type="checkbox" id="sixth" />
                    Garry
                </label>
                <label htmlFor="seventh">
                    <input type="checkbox" id="seventh" />
                    Liza
                </label>
                <label htmlFor="eighth">
                    <input type="checkbox" id="eighth" />
                    Mike
                </label>
            </div>
        </div>
    </div>
    );
}

export default SelectForCreateEventPage;