window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}

let equipe1 = '';
let equipe2 = '';
var pontos1 = 0;
var pontos2 = 0;
var vitorias1 = 0;
var vitorias2 = 0;

function comecar(){
    pontos1 = 0;
    pontos2 = 0;
    equipe1 = document.getElementById('form').equipe1.value;
    equipe2 = document.getElementById('form').equipe2.value;

    document.getElementById('partida').style.display = 'block';
    document.getElementById('equipe1h2').innerHTML = equipe1;
    document.getElementById('equipe2h2').innerHTML = equipe2;

    document.getElementById('pontos1').innerHTML = pontos1;
    document.getElementById('pontos2').innerHTML = pontos2;
}

function pontua1(pontos){
    pontos1 += pontos

    if(pontos1 >= 12){
        vitorias1 += 1;
        pontos1 = 0;
        pontos2 = 0;
    }

    document.getElementById('pontos1').innerHTML = pontos1;
    document.getElementById('vitorias1').innerHTML = vitorias1;
}

function pontua2(pontos){
    pontos2 += pontos

    if(pontos2 >= 12){
        vitorias2 += 1;
        pontos1 = 0;
        pontos2 = 0;
    }
    
    document.getElementById('pontos2').innerHTML = pontos2;
    document.getElementById('vitorias2').innerHTML = vitorias2;
}

function recomecar(){
    document.getElementById('partida').style.display = 'none';

    equipe1 = '';
    equipe2 = '';
    pontos1 = 0;
    pontos2 = 0;
    vitorias1 = 0;
    vitorias2 = 0;

    document.getElementById('pontos1').innerHTML = '0';
    document.getElementById('pontos2').innerHTML = '0';
    document.getElementById('vitorias1').innerHTML = '0';
    document.getElementById('vitorias2').innerHTML = '0';
}