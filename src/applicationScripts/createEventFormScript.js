import restClient from '../models/client';

const createEventFormHandler = () => {

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

        restClient.create('events', newEvent)
            .then(
                () => {
                    nameInput.value = '';
                    dayInput.value = 'Choose...';
                    timeInput.value = 'Choose...';
                    alert('Event was successfully added to the calendar');
                    window.location.href = '/react_calendar';
                },
                (error) => {
                    console.log(error.message);
                    const errHeader = document.querySelector('.error-msg');
                    errHeader.setAttribute('style', 'display: block;');
                }
            );
    };
};

export default createEventFormHandler;

