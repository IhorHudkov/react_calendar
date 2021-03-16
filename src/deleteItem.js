import modalWindow from './plugins/modal';
import restClient from './models/client';

const modal = modalWindow({
    content: `
      <p>Are You sure You want to delete "Retrospective" event?</p>
      <div class="modal-buttons">
        <button type="button" class="btn btn-danger" id="yes">Yes</button>
        <button type="button" class="btn btn-outline-dark" id="no">No!</button>
      </div>
    `,
  });

  export default function deleteItem(e) {
    const { currentTarget } = e;
    const { target } = e;

    modal.open();

    const yesBtn = document.querySelector('#yes');
    const noBtn = document.querySelector('#no');

    const noBtnClickHandler = () => {
      modal.close();
      yesBtn.removeEventListener('click', yesBtnClickHandler);
      noBtn.removeEventListener('click', noBtnClickHandler);
    };

    const yesBtnClickHandler = () => {
      const eventId = currentTarget.parentNode.getAttribute('id');

      restClient.delete('events', eventId)
        .then(
          (ok) => {
            if (ok) {
              target.parentNode.remove();
              modal.close();
              console.log(eventId);
              alert('Event successfully deleted!');
            } else {
              modal.close();
              alert('Something went wrong!');
            }
            yesBtn.removeEventListener('click', yesBtnClickHandler);
            noBtn.removeEventListener('click', noBtnClickHandler);
          },
          (error) => {
            modal.close();
            alert(error.message);
            yesBtn.removeEventListener('click', yesBtnClickHandler);
            noBtn.removeEventListener('click', noBtnClickHandler);
          }
        );
    };

    yesBtn.addEventListener('click', yesBtnClickHandler);

    noBtn.addEventListener('click', noBtnClickHandler);
  }