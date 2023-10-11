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

  // Substituir os valores no HTML
  document.querySelector(".temperatura a").textContent = temperatura;
  document.querySelector(".euro a").textContent = euro;
  document.querySelector(".dolar a").textContent = dolar;
}
