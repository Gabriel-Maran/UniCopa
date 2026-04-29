import FLAGS from "../data/countryImages.js";

export function getImagePaisBySiglaService(sigla) {
  return FLAGS[sigla] || null;
}
