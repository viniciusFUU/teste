/* ---------------exercício 2------------------ */
console.log("-----Exercício número 2-----");
var value = 12;
var primeiro = 0,
  segundo = 1;
var numero;

if (value <= 2) {
  numero = value - 1;
} else {
  for (var count = 3; count <= value; count++) {
    numero = segundo + primeiro;
    primeiro = segundo;
    segundo = numero;
  }
}
console.log(numero);

/* ---------------exercício 3------------------ */
console.log("-----Exercício número 3-----");
let maiorPreco;
let menorPreco;
let precoMedio;
let arrayAcimaMedia = [];

const array = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

precoMedio = array.reduce((acc, item) => acc + item.valor, 0) / array.length;

array.forEach((item) => {
  if (item.valor === 0.0) {
    return;
  } else if (!menorPreco && !maiorPreco) {
    menorPreco = item.valor;
    maiorPreco = item.valor;
  } else if (item.valor < menorPreco) {
    menorPreco = item.valor;
  } else if (item.valor.maiorPreco) {
    maiorPreco = item.valor;
  }

  if (item.valor > precoMedio) {
    arrayAcimaMedia.push(item.valor);
  }
});

console.log(`O maior valor foi ${maiorPreco}`);
console.log(`O menor valor foi ${menorPreco}`);
console.log(`A média de valor foi ${precoMedio}`);
console.log(
  `A quantidade de dias que tiveram faturamento acima da media foi de ${arrayAcimaMedia.length}`
);

/* ---------------exercício 4------------------ */
console.log("-----Exercicio número 4-----");

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let others = 19849.53;

let total = sp + rj + mg + es + others;

persp = (sp / total) * 100;
perrj = (rj / total) * 100;
permg = (mg / total) * 100;
peres = (es / total) * 100;
perot = (others / total) * 100;

console.log(`O percentual de São paulo foi de ${persp.toFixed(2)}`);
console.log(`O percentual do Rio de Janeiro foi de ${perrj.toFixed(2)}`);
console.log(`O percentual de Minas Gerais foi de ${permg.toFixed(2)}`);
console.log(`O percentual do Espirito Santo foi de ${peres.toFixed(2)}`);
console.log(`O percentual dos demais Estados foi de ${perot.toFixed(2)}`);

console.log("-----Exercício número 5-----");
const inverterPalavra = (str) => {
  let novaPalavra = "";
  for (let i = str.length - 1; i >= 0; i--) {
    novaPalavra += str[i];
  }
  return novaPalavra;
};

const palavraInvertida = inverterPalavra("vinicius");
console.log(palavraInvertida);
