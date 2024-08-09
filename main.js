const form = document.getElementById('formNumber');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valCampoA = document.getElementById('campoA').value;
    const valCampoB = document.getElementById('campoB').value;

    const valorCampoA = Number (valCampoA);
    const valorCampoB = Number (valCampoB);

    const mensagemSucesso = document.querySelector('.mensagenVeradeiro');
    const mensagemErro = document.querySelector('.mensagenFalso');

    const textoSucesso = `A defesa <b>${valCampoB}</b> é maior que o ataque <b>${valCampoA}</b>`;
    const textoErro = `Derrota! O Ataque <b>${valCampoB}</b> é menor que o ataque <b>${valCampoA}</b>`;


    if(valorCampoB > valorCampoA) {
        mensagemSucesso.innerHTML = textoSucesso;
        mensagemErro.innerHTML = '';
        mensagemSucesso.style.display= 'block';
        mensagemErro.style.display = 'none';

    }
    else {
        mensagemErro.innerHTML= textoErro;
        mensagemSucesso.innerHTML= '';
        mensagemErro.style.display = 'block'; 
        mensagemSucesso.style.display ='none';
    }
    valCampoA.value = '' ;
    valCampoB.value = '' ;
})

console.log(form);