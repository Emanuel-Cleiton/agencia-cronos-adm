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
    // puxa informações do input

    let inputServico = document.querySelector('#nomeServico').value;
    let inputDescricao = document.querySelector('#descricaoServico').value;
    let inputUrlImagem = document.querySelector('#imagemServico').value;
    let inputIdServico = document.querySelector('#idServico').value;
    
    modalFundo.classList.remove('modalFront');
    if (inputServico.length<1){
        alert('Digite um Serviço!')
        return false;
    }
    if (inputIdServico.length ==''){
        alert('Digite um ID!')
        return false;
    }
    arrayServicos.push({
        // irserção de dados na array
        'servico':inputServico,
        'descricao':inputDescricao,
        'img':inputUrlImagem,
        'id': inputIdServico,
    });
    let novoServico= document.createElement('tr')
    novoServico.innerHTML=`
    <td>${inputServico}</td>
    <td><img src=${inputUrlImagem}/></td>
    <td>${inputDescricao}</td>
    <td>${inputIdServico}</td>
    <td> <button class="btn btn-secondary m-1"
    onclick="editaServico(${inputIdServico})">
    editar</button>
    <button class="btn btn-danger m-1"
    onclick="deletaServico(${inputIdServico})"> excluir </button></td>; 
    `
    novoServico.setAttribute('id', `${inputIdServico}`)
    document.querySelector('my-5').appendChild(novoServico);
    document.querySelector('.modal-form').reset();  
  
}
 salvaServico.addEventListener('click',cadastrarServiço);





function editaServico() {

}

function deletaServico() {

}

