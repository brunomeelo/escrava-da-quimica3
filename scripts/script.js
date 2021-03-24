
//inicio das info de molaridade
let inputVolume = document.getElementById("volume");
let inputMassa = document.getElementById("massa");
let inputMassamolar = document.getElementById("massamolar");
let resultado = document.getElementById("re1");
// fim das info de molaridade

// inicio das info de regra de 3
let inputValor1 = document.getElementById("valor1");
let inputValor2 = document.getElementById("valor2");
let inputValor3 = document.getElementById("valor3");
let inputValorX = document.getElementById("valorx");
let resultado2 = document.getElementById("re2");

//calculando molaridade
function calcular(){

    let volume = inputVolume.value;
    let massa = inputMassa.value;
    let mmolar = inputMassamolar.value;
    let vvm = mmolar * volume;           

    let molaridade1 = massa / vvm;
    let molaridade = parseFloat(molaridade1.toFixed(3));
    console.log(molaridade);

    resultado.innerHTML = `<p>A Molaridade é = ${molaridade}</p>`;

}

//calculando regra de 3
function calcular2(){

    let valor1 = inputValor1.value;
    let valor2 = inputValor2.value;
    let valor3 = inputValor3.value;
    let valorx = inputValorX.value;

    let valorx1 = valor3 * valor2 / valor1;

    resultado2.innerHTML = `<p> X é = ${valorx1}</p>`;
    document.getElementById("valorx").value = valorx1;

}



function limpar1(){
    inputMassa.value = ""
    inputMassamolar.value = ""
    inputVolume.value = ""
    

}

function limpar2(){
    inputValor1.value = ""
    inputValor2.value = ""
    inputValor3.value = ""
    inputValorX.value = ""
}




