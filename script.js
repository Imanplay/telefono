function dial() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber.length === 10) {
        window.open("tel:8493957773")
        // Aquí podrías implementar la lógica para realizar la llamada real si estuvieras desarrollando una aplicación móvil.
    } else {
        alert('Introduce un número válido de 10 dígitos.');
    }
}

function insertNumber(event) {
    if (event.target.tagName === 'LI') {
        let number = event.target.innerText;
        let currentPhoneNumber = document.getElementById('phoneNumber').value;

        // Verificar si ya hay 10 dígitos antes de agregar más
        if (currentPhoneNumber.length < 10) {
            document.getElementById('phoneNumber').value += number;
        }
    }
}

function hangUp() {
    // Reiniciar todo
    document.getElementById('phoneNumber').value = '';
}
function deleteNumber() {
    let currentPhoneNumber = document.getElementById('phoneNumber').value;
    document.getElementById('phoneNumber').value = currentPhoneNumber.slice(0, -1);
}