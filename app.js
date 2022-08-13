

//obtener lista de lenguajes desde la api
let listaLenguajes = [];
const inputTranslateFrom = document.querySelector('#translateFrom');
const inputTranslateTo = document.querySelector('#translateTo');

let translateFrom;
let translateTo;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26e8737a8bmsh6e8ffca1bff9683p183eabjsnd14222e00330',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

fetch('https://text-translator2.p.rapidapi.com/getLanguages', options)
	.then(response => response.json())
	.then(response =>{
        listaLenguajes = response.data.languages;
        
        listaLenguajes.forEach( lengua => {
            inputTranslateFrom.innerHTML += `<option value="${lengua.code}">${lengua.name}</option>`;
            inputTranslateFrom.onchange = ()=> translateFrom = inputTranslateFrom.value;
            
            inputTranslateTo.innerHTML += `<option value="${lengua.code}">${lengua.name}</option>`;
            inputTranslateTo.onchange = ()=> translateTo = inputTranslateTo.value;
        })
    })
	.catch(err => console.error(err));
    
    
//Traducir el rexto ingresado

const translate = document.querySelector('#translate');
const inputText = document.querySelector('#inputText')
const outputText = document.querySelector('#outputText')

translate.addEventListener('click', translateText);


function translateText(){


    if(translateFrom && translateTo){

        if(inputText.value !== ''){

            const encodedParams = new URLSearchParams();
            encodedParams.append("source_language",  translateFrom);
            encodedParams.append("target_language", translateTo);
            encodedParams.append("text", inputText.value);
            
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '26e8737a8bmsh6e8ffca1bff9683p183eabjsnd14222e00330',
                    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                },
                body: encodedParams
            };
            
            fetch('https://text-translator2.p.rapidapi.com/translate', options)
                .then(response => response.json())
                .then(response => outputText.value = response.data.translatedText)
                .catch(err => console.error(err));
        }else{
            alert('Debes ingresar un texto para traducirlo')
        }
        

    }else{
        alert('Debes seleccionar los lenguages a traducir')
    }
    
}

