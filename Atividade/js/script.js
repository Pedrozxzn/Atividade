const exercicio1 = () => {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3>#${i} </h3>`;
  }
};
const exercicio2 = () => {
  for (let i = 2; i <= 50; i += 2) {
    document.getElementById("resposta").innerHTML += `<h3>${i}</h3>`;
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
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let valor = document.getElementById("num").value;
  let contador = 0;
  while (contador <= valor) {
    if (contador % 2 != 0) {
      document.getElementById("resposta").innerHTML += `#${contador}`;
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
    document.getElementById("resposta").innerHTML += `${contador} `;
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
      document.getElementById("resultado").innerText = `Essa palavra é um palíndromo`;
    }
     else{
      document.getElementById("erro").innerText = `Essa palavra não é um palíndromo`;
    }
  
};
const exercicio9 = () => {
  document.getElementById(
    "resposta"
  ).innerHTML = `<h2>Resposta da Atividade</h2>`;
  let mn2 = 0;
  for (let i = 1; i <= 100; i++) {
    mn2 += i;
  }
  document.getElementById("resposta").innerHTML += mn2;
};
exercicio10 = () => {
    let nume = document.getElementById("num").value;
    let resp = document.getElementById("resultado");
    let somar = 0;
    let err = document.getElementById("erro");
    let i = 1;
    if (nume > 0) {
      while (i <= nume) {
        err.innerHTML = "";
        somar += i;
        let media = somar / nume;
        resp.innerHTML = media;
  
        i++;
      }
    } else {
      resp.innerHTML = "";
      err.innerHTML = "use um número maior que 0";
    }
  };
const exercicio11 = () => {
  document.getElementById(
    "resposta"
  ).innerHTML = `<h3>Resposta da Atividade</h3>`;
  for (let i = 1; i <= 100; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
    //if ()
  }
};
