const exercicio1=() =>{
    for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3>#${i} </h3>`
    }
}
const exercicio2=()=>{
    for (let i = 2; i <= 50; i+= 2) {
       document.getElementById("resposta").innerHTML += `<h3>#${i}</h3>`;
        
    }
}
const exercicio3=()=>{
    let resultado1 = document.getElementById("num").value;
    if (resultado1%2 !== 0){
        document.getElementById("resposta").innerHTML = `<h3>O número escolhido é primo</h3>`
    }
    else {
        document.getElementById("resposta").innerHTML = `<h3>O número escolhido não é primo</h3>`
    }
}
const exercicio4=()=>{
    let resultado2 = document.getElementById("num").value
    for (let i = 1; i <= 10; i++) {
        document.getElementById("resposta").innerHTML += `<h3>#${resultado2*i}</h3>`;
        
    }
}
const exercicio5 = () => {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>"
  let valor = document.getElementById("num").value;
  let contador = 0;
  while (contador <= valor) {
    if (contador % 2 != 0) {
      document.getElementById("resposta").innerHTML += #${contador};
    }
    contador++;
  }
};