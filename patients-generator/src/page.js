import { ui } from './ui';

class PageState {
    homeState(data) {
        document.querySelector('.heading').textContent = 'Patients List';
        document.querySelector('.patients-list').innerHTML = `
            ${ui.showPatients(data)}
        `;
        document.querySelector('.add-form').style.display = "none";
    };

    submitState() {
        document.querySelector('.heading').textContent = 'Add New Patient';
        document.querySelector('.patients-list').innerHTML = ``;
        document.querySelector('.add-form').style.display = "block";
    }
}

export const page = new PageState();