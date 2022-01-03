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

// chamando botoes
let salvaEditar = document.querySelector('#botaoSalvarEditar');
let salvaServico = document.querySelector('#botaoSalvar');

// array

let arrayServicos = [
// array de referencia
    // {
    //     'servico': 'servicoAdicionado',
    //     'descricao': 'servicoDescricao',
    //     'img': 'servicoURL',
    //     'id': 'servicoID'
    // },

    {
        'servico': 'Desenvolvimento Web	',
        'descricao': 'Consequatur debitis ipsa numquam illum placeat quod deleniti.',
        'img': '',
        'id': '0'
  
      },
      {
        'servico': 'Marketing Digital',
        'descricao': 'Consequatur debitis ipsa numquam illum placeat quod deleniti.',
        'img': '',
        'id': '1'
  
      },
      {
        'servico': 'Consultoria UX',
        'descricao': 'Consequatur debitis ipsa numquam illum placeat quod deleniti.',
        'img': '',
        'id': '2'
  
      }

]

// puxa informações ja postas da array pro html

function insereAntigos() {

    for (let conta = 0; conta < arrayServicos.length; conta++) {
        let Item = document.createElement('tr')
        Item.innerHTML = `
    <td>${arrayServicos[conta].servico}</td>
    <td><img src="imagens/ilustra${[conta]}.png" class="img-fluid" /></td>
    <td>${arrayServicos[conta].descricao}</td>
    <td>${arrayServicos[conta].id}</td>
    <td>
    <button class="btn btn-secondary m-1" onclick="editaServico(${arrayServicos[conta].id})">editar</button>
    <button class="btn btn-danger m-1" onclick="deletaServico(${arrayServicos[conta].id})">excluir</button>
    </td>`;

    Item.setAttribute('id', `${[conta]}`)
    document.querySelector('.my-5').appendChild(Item); 
    document.querySelector('.modal-form').reset();
    }
}


insereAntigos()

function cadastrarServiço(){

    let inputServiço = document.querySelector('#nomeServico').value;
    let inputDescrição = document.querySelector('#descricaoServico').value;
    let inputUrlImagem = document.querySelector('#imagemServico').value;
    let inputIdServico = document.querySelector('#idServico').value;
    
}




function editaServico() {

}

function deletaServico() {

}

