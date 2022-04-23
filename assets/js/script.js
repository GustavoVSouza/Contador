var numeropage = document.getElementById('numero')
var numero = 0;

function adicionar() {
    numero = numero + 1;
    numeropage.innerHTML = numero;
}

function subtrair() {
    numero = numero - 1;
    numeropage.innerHTML = numero;
}
