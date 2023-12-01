function showOutput(dataBase) {
    /*document.querySelector('.city').innerHTML = `Clima em ${dataBase.name}`;
    document.querySelector('.temperature').innerHTML = `${Math.round(dataBase.main.temp)}°C`;
    document.querySelector('.weather').innerHTML = dataBase.weather[0].description;
    document.querySelector('.humidity').innerHTML = `Umidade: ${dataBase.main.humidity}%`;
    document.querySelector('.iconWeather').src =  `https://openweathermap.org/img/wn/${dataBase.weather[0].icon}.png`*/
    console.log(dataBase);
}

async function searchCity(paisSigla) {
    const dataBase = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${sigla}`).then(response => response.json());

    showOutput(dataBase);
    
}

function inputCity() {
    const sigla = document.querySelector('').value;
    searchCity(sigla);
}
    document.addEventListener('DOMContentLoaded', function () {
    // Obtém a lista de países
    let listaPaises = document.querySelectorAll('.paises li');
    const sigla = document.querySelector('').value;
    
    // Adiciona um evento de clique a cada item da lista de países
    listaPaises.forEach(function (pais) {
        pais.addEventListener('click', function () {
            // Obtém o id do país clicado
            let paisId = pais.id;
            let paisSigla = pais.sigla;
            // Exibe os contêineres de conteúdo correspondentes ao país clicado
            
            exibirConteudo(paisId);
            inputCity(paisSigla);
        });
    });

    // Função para exibir os contêineres de conteúdo correspondentes ao país clicado
    function exibirConteudo(paisId) {
        // Oculta todos os contêineres de conteúdo
        let todosConteudos = document.querySelectorAll('.conteudo');
        todosConteudos.forEach(function (conteudo) {
            conteudo.style.display = 'none';
        });

        // Exibe os contêineres de conteúdo correspondentes ao país clicado
        let conteudoPais1 = document.getElementById(paisId + '-conteudo-1');
        let conteudoPais2 = document.getElementById(paisId + '-conteudo-2');
        let conteudoPais3 = document.getElementById(paisId + '-conteudo-3');

        if (conteudoPais1 && conteudoPais2 && conteudoPais3) {
            conteudoPais1.style.display = 'block';
            conteudoPais2.style.display = 'block';
            conteudoPais3.style.display = 'block';
        }
    }
});