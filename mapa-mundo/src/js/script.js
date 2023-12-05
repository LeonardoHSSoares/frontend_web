
function showOutput(dataBase) {
   document.querySelector('.nomePais').textContent= dataBase[0].nome.abreviado;
    document.querySelector('.capital').textContent = dataBase[0].governo.capital.nome;
    document.querySelector('.descricaoPais').
    textContent = dataBase[0].historico;
    document.querySelector('.area').textContent = dataBase[0].area.total;
    document.querySelector('.simbolo').textContent = dataBase[0].area.unidade.símbolo;
    document.querySelector('.idioma').innerHTML = dataBase[0].linguas[0].nome;
    document.querySelector('.moeda').innerHTML = dataBase[0].unidades-monetarias[0];

    
    
    /*document.querySelector('.city').innerHTML = `Clima em ${dataBase.name}`;
    document.querySelector('.temperature').innerHTML = `${Math.round(dataBase.main.temp)}°C`;
    document.querySelector('.weather').innerHTML = dataBase.weather[0].description;
    document.querySelector('.humidity').innerHTML = `Umidade: ${dataBase.main.humidity}%`;
    document.querySelector('.iconWeather').src =  `https://openweathermap.org/img/wn/${dataBase.weather[0].icon}.png`*/

}

async function searchCity(siglaPais) {
    const dataBase = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${siglaPais}`).then(response => response.json());

    showOutput(dataBase);
    
}

document.addEventListener('DOMContentLoaded', function () {
        let listaPaises = document.querySelectorAll('.paises li');
        
        listaPaises.forEach(function (pais) {
            pais.addEventListener('click', function () {
                let paisId = pais.id;
                exibirConteudo(paisId);
            });
        });
        listaPaises.forEach(function (pais) {
            pais.addEventListener('click', function () {
                // Obtém o valor do atributo 'data-sigla'
                let siglaPais = pais.getAttribute('value');
                
                console.log(siglaPais)

                
                searchCity(siglaPais); // Chama a função de pesquisa com a sigla do país
            });
        });

        // Correção da seleção de elementos por classe
        

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
