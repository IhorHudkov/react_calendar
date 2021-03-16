 import  restClient from './models/client';
 import  deleteItem from "./deleteItem";
 
 export default function fillCalendar(allMembers) {
    const selectedParticipants = [];
    const participantsCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    participantsCheckboxes.forEach((item) => {
      const label = document.querySelector(`label[for="${item.id}"`);
      selectedParticipants.push(label.textContent.trim());
    });

    restClient.getAll('events')
      .then(
        (allEvents) => {
          if (allEvents) {
            allEvents.forEach((event) => {
              const { participants } = event;

              if (allMembers === 'all' || My$.arrCompare(participants, selectedParticipants)) {
                const headers = (JSON.parse(event.data)).dayTime;
                const td = `td[headers="${headers}"]`;
                const tableItem = document.querySelector(td);

                const tdContent = document.createElement('div');
                const eventName = document.createElement('span');
                const deleteBtn = document.createElement('span');

                tdContent.setAttribute('id', event.id);
                tdContent.setAttribute('draggable', 'true');

                deleteBtn.innerHTML = '&times;';
                eventName.textContent = (JSON.parse(event.data)).name;

                tableItem.appendChild(tdContent);
                tdContent.appendChild(eventName);
                tdContent.appendChild(deleteBtn);

                tdContent.classList.add('td-content');
                deleteBtn.classList.add('td__delete-btn');

                deleteBtn.addEventListener('click', deleteItem);
              }
            });
          }
        }
      );
  }