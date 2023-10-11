// Carregando o XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    importarXML(this);
  }
};
xhttp.open("GET", "feed.xml", true);
xhttp.send();

function importarXML(xml) {
  var xmlDoc = xml.responseXML;

  // Extrair os valores do XML
  var temperatura = xmlDoc.querySelector("weather").textContent;
  var euro = xmlDoc.querySelector("euro").textContent;
  var dolar = xmlDoc.querySelector("dollar").textContent;

  var imgVar2 = xmlDoc.querySelector("imgVar2").textContent;
  var temperaturaImg = document.querySelector(".temperatura-img");
  temperaturaImg.style.backgroundImage = "url(" + imgVar2 + ")";
  console.log(imgVar2);

  // Substituir os valores no HTML
  document.querySelector(".temperatura a").textContent = temperatura;
  document.querySelector(".euro a").textContent = euro;
  document.querySelector(".dolar a").textContent = dolar;
}

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento com a classe "data"
  var dataElement = document.querySelector(".data");

  // Obtém a data atual
  var dataAtual = new Date();

  // Formata a data no formato desejado (04 de Outubro de 2023)
  var options = { year: "numeric", month: "long", day: "numeric" };
  var dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);

  // Define o conteúdo do elemento para a data formatada
  dataElement.querySelector("a").textContent = dataFormatada;

  var horaElement = document.querySelector(".hora");
  var horaFormatada = dataAtual.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  horaElement.querySelector("a").textContent = horaFormatada;
});
