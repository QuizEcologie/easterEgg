document.addEventListener('DOMContentLoaded', function() {
    var boutonEffacer = document.getElementById('effacerContenu');

    boutonEffacer.addEventListener('click', function() {
        document.body.innerHTML = '';
        var nouveauTexte = document.createElement('p');
        nouveauTexte.textContent = "non mdr";

        document.body.appendChild(nouveauTexte);
    });
});
