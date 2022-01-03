//Modal

let botaoAbre = document.querySelector('.btn-primary');
let modalFundo = document.querySelector('.modalBack');
let botaoFecha = document.querySelector('#botaoCancelar');


botaoAbre.addEventListener('click', function(){

    modalFundo.classList.add('modalFront');
    salvaEditar.style.display = 'none';
    salvaServico.style.display ='initial';
});

botaoFecha.addEventListener('click', function(){
    modalFundo.classList.remove('modalFront');
    removeInfoInput()
})

function removeInfoInput() {
    document.querySelector('.modal-form').reset();

}



//CRUD
let salvaEditar = document.querySelector('#botaoSalvarEditar');
let salvaServico = document.querySelector('#botaoSalvar');