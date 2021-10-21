import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #modaltitle;
  #modalBody;
  

  constructor() {

    document.addEventListener('keydown', event => {
      if ((event.code === 'Escape') && 
         document.body.classList.contains('is-modal-open')) {
        this.close();
      }
    });

  }

  setTitle(value) {
    //const modalTitle = document.querySelector('.modal__title');
    //modalTitle.textContent = value;
   this.#modaltitle = value;
  }

  setBody(value) {
    //const modalBody = document.querySelector('.modal__body');
    //modalBody.append(value);
    this.#modalBody = value;
  }
  
  open() {

    const modalElem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">${this.#modaltitle}</h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>  
    `);

    const nodeBody = modalElem.querySelector('.modal__body');
    nodeBody.append(this.#modalBody);

    const modalClose  = modalElem.querySelector('.modal__close');
    modalClose.addEventListener('click', () => {
      this.close(); 
    });

    document.body.querySelector('.container').prepend(modalElem);
    document.body.classList.add('is-modal-open');
  }

  close(){
    const elem = document.querySelector('.modal');
    elem.remove();
    document.body.classList.remove('is-modal-open');
    document.addEventListener('keydown', event => {
      if ((event.code === 'Escape') && 
         document.body.classList.contains('is-modal-open')) {
        this.close();
      }
    });

  }



}
