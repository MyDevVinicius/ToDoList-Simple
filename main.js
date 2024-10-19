document.getElementById('tarefa').addEventListener('keydown',styledInput);
document.getElementById('tarefa').addEventListener('keyup',styledInputUP);
document.getElementById('AddList').addEventListener('click', adicionaTarefa)


function styledInput(){
    let input= document.getElementById('tarefa');
    let errorInput = document.getElementById('error');
    errorInput.innerHTML='<p> ⚠ Atenção Maximo de 15 Caracteres!</p>'
    errorInput.style.color = 'Orange'
    input.style.border =' solid Orange'
    input.style.borderBottomStyle='dotted'
    
}



function styledInputUP(){
    let input= document.getElementById('tarefa').value;
    let inputstyled=document.getElementById('tarefa');
    let errorInput = document.getElementById('error')


    if(input.length > 15){
        errorInput.innerHTML='<p> Erro! -- Limite de caracteres atingido! --</p>'
        errorInput.style.color = 'red'
        inputstyled.style.border ='solid red'
        inputstyled.style.borderBottomStyle='dotted'
    }
    
    
}
function adicionaTarefa(){
    let inputAddList= document.getElementById('tarefa').value;

    if(inputAddList.trim() === ""){
        let errorInput = document.getElementById('error');
        errorInput.innerHTML = '<p style="color: red;">❌ Por favor, insira uma tarefa.</p>';
        setTimeout(()=> {
            errorInput.innerHTML=' ';
        
           },1000)
        return;
    }



    let boxPrincipal= document.querySelector('main');

    let boxItem = document.createElement('div')
    boxItem.className='box-item';
     let paragrafo = document.createElement('p')
    paragrafo.innerHTML= `<p>${inputAddList}</p>`;
    paragrafo.className='paragrafo'
    inputAddList= ''

    let btnFinalizar = document.createElement('button');
    btnFinalizar.id ='Finish-Item';
    btnFinalizar.textContent='Finalizar Tarefa ❎';
    btnFinalizar.addEventListener('click', function() {
        paragrafo.classList =('textmodify');
        btnFinalizar.textContent='Tarefa Finalizada';
        let errorInput = document.getElementById('error');
        errorInput.innerHTML='<p> 🚀 Tarefa Finalizada com Sucesso!</p>';
        errorInput.style.color = 'blue'; 
        setTimeout(()=> {
            errorInput.innerHTML=' ';
        
           },1000)
    });

    let btnExcluir = document.createElement('button');
    btnExcluir.id='Excluir-Item';
    btnExcluir.textContent='Excluir 🧺';
    btnExcluir.addEventListener('click', function() {
    boxPrincipal.removeChild(boxItem); 
    let errorInput = document.getElementById('error');
    errorInput.innerHTML='<p> Tarefa removida com Sucesso!👀 </p>';
    errorInput.style.color = 'red'; 
    setTimeout(()=> {
        errorInput.innerHTML=' ';
    
       },1000)

});

boxItem.appendChild(paragrafo);
boxItem.appendChild(btnFinalizar);
boxItem.appendChild(btnExcluir);

boxPrincipal.appendChild(boxItem);
document.getElementById('tarefa').value = '';
 let errorInput = document.getElementById('error');
  errorInput.innerHTML='<p> ✅ Tarefa Adicionada com Sucesso!</p>';
   errorInput.style.color = 'green';

   setTimeout(()=> {
    errorInput.innerHTML=' ';

   },1000)

}


