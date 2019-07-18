class UI {
    constructor() {
        this.admissionNo = document.querySelector('#admission-no');
        this.firstName = document.querySelector('#first-name');
        this.lastName = document.querySelector('#last-name');
        this.admissionDate = document.querySelector('#admission-date');
        this.hospitalNo = document.querySelector('#hospital-no');
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
        this.admissionNo.value = '';
        this.firstName.value = '';
        this.lastName.value = '';
        this.admissionDate.value = '';
        this.hospitalNo.value = '';
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}

export const ui = new UI();