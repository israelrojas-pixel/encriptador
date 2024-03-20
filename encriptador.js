'use strict';

const botonEncriptarTexto = document.getElementById('btn-encriptar-texto');
const botonDesencriptarTexto = document.getElementById('btn-desencriptar-texto');
const mensajeAEncriptar = document.getElementById('mensaje_a_convertir');
const containerArticleInfo = document.getElementById('article-text-info');
const containerArticleResult = document.getElementById('article-text-result');
const mensajeEncriptado = document.getElementById('result-encrypt-text');
const botonCopiarTextoEncriptado = document.getElementById('btn-copiar-texto-encriptado');
const botonLimpiar = document.getElementById('btn-limpiar-todo');

function encriptarTexto(texto) {
    const letrasAEncriptar = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat'
    };

    for (let key in letrasAEncriptar) {
        texto = texto.replaceAll(key, letrasAEncriptar[key]);
    }

    return texto;
}

function desencriptarTexto(texto) {
    const letrasEncriptadas = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    };

    for (let key in letrasEncriptadas) {
        texto = texto.replaceAll(key, letrasEncriptadas[key]);
    }

  return texto;
}

function validarDatosDeEntrada(texto) {
    const caracteresNoPermitidos = "@©°ñ«»—¿½®™§¶†‡±~µ÷·•Ø‰_:Ñ][¨*¡=)(/&%$#æ@ł€¶ŧ←↓→øþłĸłĸ̉ħŋħŋŋđđððßææ«»¢“”µ─·̣áéíóú";

    let textoCorrecto = true;

    for (let palabra of texto.split('')) {
        if (caracteresNoPermitidos.includes(palabra)) {
            console.log(palabra)
            textoCorrecto = false;
            return textoCorrecto;
        }
    }

    return textoCorrecto;
}

botonEncriptarTexto.addEventListener('click', () => {
    if (validarDatosDeEntrada(mensajeAEncriptar.value)) {
        containerArticleInfo.classList.add('container-info-result-encrypt-text--ocult');
        containerArticleResult.classList.add('container-info-result-encrypt-text--show');
    
        mensajeEncriptado.value = encriptarTexto(mensajeAEncriptar.value.toLowerCase().trim());
    } else {
        alert('No se permiten caracteres especiales o letras con acento, por favor corrija el texto');
    }
});

botonCopiarTextoEncriptado.addEventListener('click', () => {
    mensajeEncriptado.select();
    document.execCommand('copy');
    alert('Texto copiado');
});

botonDesencriptarTexto.addEventListener('click', () => {
    if (validarDatosDeEntrada(mensajeAEncriptar.value)) {
        mensajeEncriptado.value = desencriptarTexto(mensajeAEncriptar.value.toLowerCase().trim());
        containerArticleInfo.classList.add('container-info-result-encrypt-text--ocult');
        containerArticleResult.classList.add('container-info-result-encrypt-text--show');
    } else {
        alert('No se permiten caracteres especiales o letras con acento, por favor corrija el texto');
    }

});

botonLimpiar.addEventListener('click', () => {
    mensajeAEncriptar.value = '';
    containerArticleInfo.classList.remove('container-info-result-encrypt-text--ocult');
    containerArticleResult.classList.remove('container-info-result-encrypt-text--show');
    setTimeout("alert('Pantalla limpiada con exito')", 200);
});