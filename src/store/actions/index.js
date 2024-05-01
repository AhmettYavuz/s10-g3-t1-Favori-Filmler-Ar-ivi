export const SONRAKİ_FİLM = "SONRAKİ_FİLM";
export const ÖNCEKİ_FİLM = "ÖNCEKİ_FİLM";
export const ADD_FAVORİTE = "ADD_FAVORİTE";
export const REMOVE_FAVORİTE = "REMOVE_FAVORİTE";

export const sonrakiFilm = () => {
  return { type: SONRAKİ_FİLM };
};

export const öncekiFilm = () => {
  return { type: ÖNCEKİ_FİLM };
};

export const addFavorite = () => {
  return { type: ADD_FAVORİTE };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORİTE, payload: id };
};
