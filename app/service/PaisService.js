const DADOS_COPA = require("../data/copa_mundo_2026_jogos_brasilia_com_estadios.json");

export function getDadosCopaService() {
  return DADOS_COPA || null;
}

export function getJogosDiariosService() {
  let mapDias = {};
  let jogos = getDadosCopaService().jogos;
  jogos.forEach((jogo) => {
    if (mapDias[jogo.data_brasilia]) {
      mapDias[jogo.data_brasilia].push(jogo);
    } else {
      mapDias[jogo.data_brasilia] = [jogo];
    }
  });
  return mapDias;
}
