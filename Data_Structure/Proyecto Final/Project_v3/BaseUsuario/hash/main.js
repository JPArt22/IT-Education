
function openExam() {
    var fullName = document.getElementById('full-name').value;
    var documentNumber = document.getElementById('document-number').value;

    // Validar que los campos estén completos antes de abrir el examen
    if (fullName.trim() === '' || documentNumber.trim() === '') {
        alert('Por favor, complete todos los campos antes de abrir el examen.');
        return;
    }

    // Codificar los datos utilizando btoa()
    var encodedFullName = btoa(fullName);
    var encodedDocumentNumber = btoa(documentNumber);

    // Generar el hash con los datos codificados
    var hash = '#' + encodedFullName + '/' + encodedDocumentNumber;

    // Abrir el examen de matemáticas con el hash en una nueva ventana
    window.open('index.html' + hash, '_blank');
}


