class UI {
    constructor() {
        this.idInput = document.querySelector('#id');
        this.admissionNoInput = document.querySelector('#admission-no');
        this.firstNameInput = document.querySelector('#first-name');
        this.lastNameInput = document.querySelector('#last-name');
        this.admissionDateInput = document.querySelector('#admission-date');
        this.hospitalNoInput = document.querySelector('#hospital-no');
        this.btnPatientSubmit = document.querySelector('.add-patient-submit');
        this.heading = document.querySelector('.heading');
        this.lead = document.querySelector('.lead');
    }

    showPatients(patients) {
        let patientItem = '';

        patients.forEach((patient) => {
            patientItem += `
                <tr>
                    <th scope="row">${patient.admissionNo}</th>
                    <td>${patient.firstName}</td>
                    <td>${patient.lastName}</td>
                    <td>${patient.admissionDate}</td>
                    <td>${patient.hospitalNo}</td>
                    <td>
                        <a href="#" class="edit card-link" data-id="${patient.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                    </td>
                    <td> 
                        <a href="#" class="delete card-link" data-id="${patient.id}">
                            <i class="fa fa-remove"></i>
                        </a> 
                    </td>
                </tr>
            `;
        });

        let output = `
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Admission No.</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Admission Date</th>
                    <th scope="col">Hospital No.</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                    ${patientItem}
                </tbody>
            </table>
        `;

        return output;
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.textContent = message;
        div.className = className;
        const container = document.querySelector('.contentContainer');
        const heading = document.querySelector('.heading');
        container.insertBefore(div, heading);

        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    clearFields() {
        this.admissionNoInput.value = '';
        this.firstNameInput.value = '';
        this.lastNameInput.value = '';
        this.admissionDateInput.value = '';
        this.hospitalNoInput.value = '';
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    fillForm(data) {
        this.idInput.value = data.id;
        this.admissionNoInput.value = data.admissionNo;
        this.firstNameInput.value = data.firstName;
        this.lastNameInput.value = data.lastName;
        this.admissionDateInput.value = data.admissionDate;
        this.hospitalNoInput.value = data.hospitalNo;

        this.changeFormState('edit');
    }

    clearIdInput() {
        this.idInput.value = '';
    }

    changeFormState(type) {
        if (type === 'edit') {
            this.heading.textContent = 'Edit patient';
            this.lead.textContent = 'Fill out this form to edit patient';
            this.btnPatientSubmit.className = 'add-patient-submit btn btn-warning btn-block';

            const button = document.createElement('button');
            button.className = 'patient-cancel btn btn-light btn-block mt-2';
            button.appendChild(document.createTextNode('Cancel Edit'));

            const cardForm = document.querySelector('.card-form');
            const formEnd = document.querySelector('.form-end');
            cardForm.insertBefore(button, formEnd);
        } else {
            this.heading.textContent = 'Add New Patient';
            this.lead.textContent = 'Fill out this form to add new patient';
            this.btnPatientSubmit.textContent = 'Submit';
            this.btnPatientSubmit.className = 'add-patient-submit btn btn-primary btn-block';
            if (document.querySelector('.patient-cancel')) {
                document.querySelector('.patient-cancel').remove();
            }
            this.clearIdInput();
            this.clearFields();
        }
    }
}

export const ui = new UI();