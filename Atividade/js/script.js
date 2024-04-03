const exercicio1 = () => {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("rsptosta").innerHTML += `<h3>#${i} </h3>`;
  }
};
const exercicio2 = () => {
  for (let i = 2; i <= 50; i += 2) {
    document.getElementById("rsptosta").innerHTML += `<h3>${i}</h3>`;
  }
};
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  document.getElementById("erro").innerText = "";
  document.getElementById("resultado").innerText = "";
  if (num <= 1) {
    document.getElementById("erro").innerText = "Seu número não é primo";
    document.getElementById("resultado").innerText = "";
  } else {
    document.getElementById("erro").innerText = "";
    document.getElementById("resultado").innerText = ``;
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
    primo
      ? (document.getElementById("resultado").innerText = `Seu número é primo`)
      : (document.getElementById("erro").innerText = `Seu número não é primo`);
  }
};
const exercicio4 = () => {
  document.getElementById("erro").innerText = " ";
  document.getElementById("resultado").innerText = " ";
  let valor = document.getElementById("num").value;
  if (valor <= 0) {
    document.getElementById(
      "erro"
    ).innerText += `Digite um valor positivo e diferente de 0`;
  } else {
    for (let i = 0; i <= 10; i++) {
      document.getElementById("resultado").innerHTML += `<br>${valor}X${i}=${
        valor * i
      } <br/>`;
    }
  }
};
const exercicio5 = () => {
  document.getElementById("rsptosta").innerHTML =
    "<h2>rsptosta da Atividade</h2>";
  let valor = document.getElementById("num").value;
  let contador = 0;
  while (contador <= valor) {
    if (contador % 2 != 0) {
      document.getElementById("rsptosta").innerHTML += `#${contador}`;
    }
    contador++;
  }
};
const exercicio6 = () => {
  let valor = document.getElementById("num").value;
  document.getElementById("erro").innerText = ``;
  document.getElementById("resultado").innerText = ``;
  let contador = 0;
  let nm = 0;
  if (valor <= 0) {
    document.getElementById("erro").innerText = `Digite um número maior que 0`;
  } else {
    while (contador <= valor) {
      if (contador % 2 == 0) {
        nm += contador;
        document.getElementById(
          "resultado"
        ).innerText = `A soma entre eles é ${nm}`;
      }
      contador++;
    }
  }
};
const exercicio7 = () => {
  let contador = 10;
  while (contador > 0) {
    document.getElementById("rsptosta").innerHTML += `${contador} `;
    contador--;
  }
};
const exercicio8 = () => {
  document.getElementById("resultado").innerText = ``;
  document.getElementById("erro").innerText = ``;
  let valor = document.getElementById("palavra").value;
  const palavras = valor.split("");
  const palavrasinv = [];
  for (let i = palavras.length; i >= 0; i--) {
    palavrasinv.push(palavras[i]);
  }

  if (palavras.join("") == palavrasinv.join("")) {
    document.getElementById(
      "resultado"
    ).innerText = `Essa palavra é um palíndromo`;
  } else {
    document.getElementById(
      "erro"
    ).innerText = `Essa palavra não é um palíndromo`;
  }
};
const exercicio9 = () => {
  document.getElementById(
    "rsptosta"
  ).innerHTML = `<h2>rsptosta da Atividade</h2>`;
  let mn2 = 0;
  for (let i = 1; i <= 100; i++) {
    mn2 += i;
  }
  document.getElementById("rsptosta").innerHTML += mn2;
};
const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let rspt = document.getElementById("resultado");
  let somar = 0;
  let err = document.getElementById("erro");
  let i = 1;
  if (num > 0) {
    while (i <= num) {
      err.innerHTML = "";
      somar += i;
      let media = somar / num;
      rspt.innerHTML = media;

      i++;
    }
  } else {
    rspt.innerHTML = "";
    err.innerHTML = "use um número maior que 0";
  }
};
const exercicio11 = () => {
  document.getElementById(
    "resposta"
  ).innerHTML = `<h3>Resposta da Atividade</h3>`;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      document.getElementById("resposta").innerHTML += `#${i}`;
    }
  }
};
const exercicio12 = () => {
  let valor = document.getElementById("num").value;
  num = valor.split("");
  let somatoria = 0;
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    somatoria += num[i] * 1;
  }
  document.getElementById(
    "resultado"
  ).innerText = `A soma dos digitos é ${somatoria} `;
};
const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }
  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i <= maior; i++) {
      let teste = verificaPrimo(i);
      if (teste) {
        result.innerText += `${i}`;
      }
    }
};
const exercicio14 = () => {
  let pegar1 = document.getElementById("num1").value;
  let pegar2 = document.getElementById("num2").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  if (pegar1 <= 0 || pegar2 <= 0) {
    resp.innerHTML = "";
    err.innerHTML = `informe um numero positivo`;
  } else {
    let area = pegar1 * pegar2;
    err.innerHTML = "";
    resp.innerHTML = `o poligono de lado ${pegar1} e comprimento ${pegar2} possui uma area de ${area}`;
  }
};
const exercicio15 = () => {

};
const exercicio16 = () => {
  let uraio = document.getElementById("num1").value;
  let resposta = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let area = 0;
  if (uraio > 0) {
    area = uraio ** 2 * 3.14;
    err.innerHTML = "";
    resposta.innerHTML = `A Area do circulo de raio ${uraio} é = ${area}`;
  } else {
    resposta.innerHTML = "";
    err.innerHTML = "informe um número positivo";
  }
};
const exercicio17 = () => {
  let pegar1 = document.getElementById("num1").value;
  let pegar2 = document.getElementById("num2").value;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  if (pegar1 <= 0 || pegar2 <= 0) {
    resp.innerHTML = "";
    err.innerHTML = `informe um numero positivo`;
  } else {
    let area = (pegar1 * pegar2) / 2;
    err.innerHTML = "";
    resp.innerHTML = `A base do triângulo ${pegar1} com a altura ${pegar2} resultará em :${area}`;
  }
};
const exercicio18 = () => {
  let pegar1 = document.getElementById("num1").value * 1;
  let pegar2 = document.getElementById("num2").value * 1;
  let pegar3 = document.getElementById("num3").value * 1;
  let resp = document.getElementById("resultado");
  let err = document.getElementById("erro");
  let soma = pegar1 + pegar2;
  if (pegar1 <= 0 || pegar2 <= 0 || pegar3 <= 0) {
    resp.innerHTML = "";
    err.innerHTML = `informe um numero positivo`;
  } else {
    let area = soma * pegar3;
    err.innerHTML = "";
    resp.innerHTML = `o poligono de lado ${pegar1} e comprimento ${pegar2} possui uma area de ${
      area / 2
    }`;
  }
};
const exercicio19 = () => {
  const dataNasc = new Date("2008=03-17");
  const dataAtual = new Date();
  const diferenca = dataAtual.getTime() - dataNasc.getTime();
  let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
  let result = document.getElementById("resultado")

  result.innerText = idade
};
const exercicio20 = () => {
  function inverterPalavras(frase) {
    let palavras = frase.split(" ");
  
    let palavrasInvertidas = [];
  
    for (let i = palavras.length - 1; i >= 0; i--) {
      palavrasInvertidas.push(palavras[i]);
    }
  
    return palavrasInvertidas.join(" ");
  }
  
  let fraseOriginal = "Eai blz, meu nome é Pedro";
  let fraseInvertida = inverterPalavras(fraseOriginal);
  console.log(fraseInvertida);
};
const exercicio21 = () =>{
};
const exercicio22 = () =>{
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let soma = 0;
  result.innerText = "";

  soma += parseInt(num);
  while (soma <= 100) {
    let numero = parseInt(prompt("Informe mais um numero"));
    if (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Número Invalido, Informe novamente"));
    } else {
      soma += numero;
    }
  }

  result.innerText = `A o total da soma é: ${soma}`;
}
};
const exercicio23 =() =>{

};
const exercicio24 =() =>{

};
const exercicio25 =() =>{

};