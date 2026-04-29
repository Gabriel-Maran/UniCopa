import {
  getDadosCopaService,
  getJogosDiariosService,
} from "../service/PaisService.js";

export function getDadosCopa() {
  return getDadosCopaService() ?? [];
}

export function getJogosDiarios() {
  return getJogosDiariosService() ?? [];
}
