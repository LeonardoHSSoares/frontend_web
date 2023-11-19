

function geraRelatorio(db) {
    
    console.log(db)
    document.getElementById('tituloPais').innerHTML = db[0].nome.abreviado
    document.querySelector('#descricao').innerHTML = db[0].historico
}

async function procurarDados() {
    const paisSelecionado = document.querySelector('.button').value;
    
    const db = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${paisSelecionado}`).then(response => response.json())
    
    geraRelatorio(db)
  
}




