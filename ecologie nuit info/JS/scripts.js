function showAlert() {
    alert('Bienvenue sur ma page web simple !');
}

var touchesEnfoncees = {};

document.addEventListener('keydown', function(event) {
    touchesEnfoncees[event.key] = true;
    gestionTouches();
});

document.addEventListener('keyup', function(event) {
    delete touchesEnfoncees[event.key];
    gestionTouches();
});

function gestionTouches() {
    if (touchesEnfoncees['j'] && touchesEnfoncees['s'] && touchesEnfoncees['p']) {
        window.location.href = 'autrePageTkt.html';
    }
}
