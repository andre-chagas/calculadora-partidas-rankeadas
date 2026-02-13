function obterNivel(vitorias) {
  let nivel = "";
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  return nivel;
}

function calcularSaldoRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  const nivel = obterNivel(vitorias);
  return { saldoVitorias, nivel };
}

const jogadores = [
  { vitorias: 5, derrotas: 3 },
  { vitorias: 15, derrotas: 5 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 75, derrotas: 20 },
  { vitorias: 85, derrotas: 10 },
  { vitorias: 95, derrotas: 5 },
  { vitorias: 120, derrotas: 15 }
];

for (let i = 0; i < jogadores.length; i++) {
  const jogador = jogadores[i];
  const resultado = calcularSaldoRankeadas(jogador.vitorias, jogador.derrotas);
  console.log(
    "O Herói tem de saldo de " +
      resultado.saldoVitorias +
      " está no nível de " +
      resultado.nivel
  );
}

