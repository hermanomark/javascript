import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', homePage);
document.getElementById('home').addEventListener('click', homePage);
document.querySelector('.prev').addEventListener('click', prevPage);
document.querySelector('.next').addEventListener('click', nextPage);
document.querySelector('.pagination').addEventListener('click', currentPage);
document.getElementById('submit-patient-page').addEventListener('click', addPage);
document.getElementById('search-user').addEventListener('keyup', searchPatients);
document.querySelector('.submit-patient').addEventListener('click', submitPatient);
document.querySelector('.patients-list').addEventListener('click', deletePatient);
document.querySelector('.patients-list').addEventListener('click', enableEdit);
document.querySelector('.form-patient').addEventListener('click', cancelEdit);

let page = 1;
const limit = 5;

function homePage(e) {
    getPatientsPagination(page, limit);
    
    e.preventDefault();
}

function addPage(e) {
    ui.changePageState('add');

    e.preventDefault();
}

function prevPage(e) {
    const totalPatients = parseInt(e.target.parentElement.parentElement.parentElement.nextElementSibling.childNodes[1].textContent);
    const totalPages = Math.ceil(totalPatients / limit);

    page -= 1;

    if (page === 0) {
        page = totalPages;
    }

    getPatientsPagination(page, limit);

    e.preventDefault();
}

function nextPage(e) {
    const totalPatients = parseInt(e.target.parentElement.parentElement.parentElement.nextElementSibling.childNodes[1].textContent);
    const totalPages = Math.ceil(totalPatients / limit);

    page += 1;

    if (page === totalPages + 1) {
        page = 1;
    }

    getPatientsPagination(page, limit);

    e.preventDefault();
}

function currentPage(e) {
    if (e.target.classList.contains('current')) {
        page = parseInt(e.target.textContent);

        getPatientsPagination(page, limit);
    }
}

function searchPatients(e) {
    const filterValue = e.target.value;

    if (filterValue !== '') {
        ui.removePagination();
        http.get(`http://localhost:3000/patients?q=${filterValue}`)
            .then(data => {
                if (data.length === 0 || data === undefined) {
                    ui.showAlert('Patient not found', 'alert alert-danger');
                } else {
                    ui.showPatients(data);
                    ui.showTotalPatients(data);
                }
            })
            .catch(err => console.log(err));
    } else {
        getPatientsPagination(page, limit);
    }
}

function enablePagination(page, limit) {
    http.get('http://localhost:3000/patients')
        .then(data => {
            ui.showPaginationDropdown(data, page, limit);
            ui.showTotalPatients(data);
        })
        .catch(err => console.log(err));
}

function getPatientsPagination(page, limit) {
    http.get(`http://localhost:3000/patients?_page=${page}&_limit=${limit}`)
    .then(data => ui.showPatients(data))
    .catch(err => console.log(err));

    enablePagination(page, limit);
}

function submitPatient() {
    const admissionNo = document.querySelector('#admission-no').value;
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const admissionDate = document.querySelector('#admission-date').value;
    const hospitalNo = document.querySelector('#hospital-no').value;
    const id = document.querySelector('#id').value;

    const data = {
        admissionNo,
        firstName,
        lastName,
        admissionDate,
        hospitalNo
    }
    
    if (admissionNo === '' || firstName === '' || lastName === '' || admissionDate === '' || hospitalNo === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        if (id === '') {
            http.post('http://localhost:3000/patients', data)
                .then(data => {
                    getPatientsPagination(page, limit);
                    ui.clearFields();
                    ui.showAlert('Added patient', 'alert alert-success');
                })
                .catch(err => console.log(err));
        } else {
            http.put(`http://localhost:3000/patients/${id}`, data)
                .then(data => {
                    ui.changePageState('add');
                    getPatientsPagination(page, limit);
                    ui.showAlert('Patient Updated', 'alert alert-success');
                })
                .catch(err => console.log(err));
        }
    }
}

function enableEdit(e) {
    if (e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const admissionNo = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        const firstName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const lastName = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        const admissionDate = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
        const hospitalNo = e.target.parentElement.parentElement.previousElementSibling.textContent;

        const data = {
            id,
            admissionNo,
            firstName, 
            lastName, 
            admissionDate, 
            hospitalNo
        }

        ui.fillForm(data);
    }

    e.preventDefault(e);
}

function cancelEdit(e) {
    if (e.target.classList.contains('patient-cancel')) {
        ui.changePageState('add');
        getPatientsPagination(page, limit);
    }

    e.preventDefault();
}

function deletePatient(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/patients/${id}`)
                .then(data => {
                    getPatientsPagination(1, limit);
                    ui.showAlert('Patient Removed', 'alert alert-success');
                })
                .catch(err => console.log(err));
        }
    }

    e.preventDefault();
}