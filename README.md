# translate-API
Practica de API con JS para traductor

Aplicacion simple para practicar el uso de API's mediante Fetch con JS.
<br>
Se trata de un traductor, el cual mendiante una peticion a la API de tipo GET recibe la lista de idiomas disponibles y los imprime en el HTML como "<option>" dentro de cada "<select>".

Luego de tener las lista de idiomas disponible, el usuario puede seleccionar las opciones que necesite y mendiante un evento de tipo "change" se leen las opciones que el usuaio haya seleccionado.

A momento de las "click"  en el boton de traducir se dispara un evento que llama a la funcion que realizar una peticion de tipo POST a la API y envia los valores de opciones selleccionadas y el texto que se haya introducio para traducirlo.
  
