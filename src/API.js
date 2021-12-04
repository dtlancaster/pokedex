const API_URL = "https://pokeapi.co/api/v2/";

export default {
  /*
    FETCH POKEMON
  */

  fetchHomePokemon: async (offset, limit) => {
    const endpoint = `${API_URL}pokemon/?offset=${offset}&limit=${limit}`;
    return await (await fetch(endpoint)).json();
  },

  fetchHomePokemonDev: async (searchTerm, url) => {
    const endpoint = searchTerm
      ? `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      : url;
    return await (await fetch(endpoint)).json();
  },

  fetchPokemon: async (pokemonName) => {
    const endpoint = `${API_URL}pokemon/${pokemonName}`;
    return await (await fetch(endpoint)).json();
  },

  fetchPokemonSpecies: async (pokemonName) => {
    const endpoint = `${API_URL}pokemon-species/${pokemonName}`;
    return await (await fetch(endpoint)).json();
  },

  fetchFirstTwentyPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=20`;
    return await (await fetch(endpoint)).json();
  },

  fetchSecondTwentyPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=40`;
    return await (await fetch(endpoint)).json();
  },

  fetchNationalPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=898`;
    return await (await fetch(endpoint)).json();
  },

  fetchKantoPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=151`;
    return await (await fetch(endpoint)).json();
  },

  fetchJohtoPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=100&offset=151`;
    return await (await fetch(endpoint)).json();
  },

  fetchHoennPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=135&offset=251`;
    return await (await fetch(endpoint)).json();
  },

  fetchSinnohPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=107&offset=386`;
    return await (await fetch(endpoint)).json();
  },

  fetchUnovaPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=156&offset=493`;
    return await (await fetch(endpoint)).json();
  },

  fetchKalosPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=72&offset=649`;
    return await (await fetch(endpoint)).json();
  },

  fetchAlolaPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=88&offset=721`;
    return await (await fetch(endpoint)).json();
  },

  fetchGalarPokemon: async () => {
    const endpoint = `${API_URL}pokemon/?limit=89&offset=809`;
    return await (await fetch(endpoint)).json();
  },

  fetchAlternateForms: async () => {
    const endpoint = `${API_URL}pokemon/?limit=220&offset=898`;
    return await (await fetch(endpoint)).json();
  },

  /*
    FETCH TYPES
  */

  fetchFireTypes: async () => {
    const endpoint = `${API_URL}type/fire`;
    return await (await fetch(endpoint)).json();
  },

  fetchGrassTypes: async () => {
    const endpoint = `${API_URL}type/grass`;
    return await (await fetch(endpoint)).json();
  },

  fetchWaterTypes: async () => {
    const endpoint = `${API_URL}type/water`;
    return await (await fetch(endpoint)).json();
  },

  fetchFightingTypes: async () => {
    const endpoint = `${API_URL}type/fighting`;
    return await (await fetch(endpoint)).json();
  },

  fetchNormalTypes: async () => {
    const endpoint = `${API_URL}type/normal`;
    return await (await fetch(endpoint)).json();
  },

  fetchFlyingTypes: async () => {
    const endpoint = `${API_URL}type/flying`;
    return await (await fetch(endpoint)).json();
  },

  fetchIceTypes: async () => {
    const endpoint = `${API_URL}type/ice`;
    return await (await fetch(endpoint)).json();
  },

  fetchBugTypes: async () => {
    const endpoint = `${API_URL}type/bug`;
    return await (await fetch(endpoint)).json();
  },

  fetchRockTypes: async () => {
    const endpoint = `${API_URL}type/rock`;
    return await (await fetch(endpoint)).json();
  },

  fetchGroundTypes: async () => {
    const endpoint = `${API_URL}type/ground`;
    return await (await fetch(endpoint)).json();
  },

  fetchPsychicTypes: async () => {
    const endpoint = `${API_URL}type/psychic`;
    return await (await fetch(endpoint)).json();
  },

  fetchGhostTypes: async () => {
    const endpoint = `${API_URL}type/ghost`;
    return await (await fetch(endpoint)).json();
  },

  fetchPoisonTypes: async () => {
    const endpoint = `${API_URL}type/poison`;
    return await (await fetch(endpoint)).json();
  },

  fetchDarkTypes: async () => {
    const endpoint = `${API_URL}type/dark`;
    return await (await fetch(endpoint)).json();
  },

  fetchFairyTypes: async () => {
    const endpoint = `${API_URL}type/fairy`;
    return await (await fetch(endpoint)).json();
  },

  fetchSteelTypes: async () => {
    const endpoint = `${API_URL}type/steel`;
    return await (await fetch(endpoint)).json();
  },

  fetchDragonTypes: async () => {
    const endpoint = `${API_URL}type/dragon`;
    return await (await fetch(endpoint)).json();
  },

  fetchElectricTypes: async () => {
    const endpoint = `${API_URL}type/electric`;
    return await (await fetch(endpoint)).json();
  },
};
