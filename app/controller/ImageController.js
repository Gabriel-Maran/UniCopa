import { getImagePaisBySiglaService as getImgBySigla } from "../service/ImageService.js";

export function getImagePaisBySigla(sigla) {
  const img = getImgBySigla(sigla);
  if (img != null) return img;
}
