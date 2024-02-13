import { filterBy, sortBy, computeStats } from '../src/dataFunctions.js';
import { data as fakeData, mockCrescente, mockDecrescente } from './data.js';

describe('filterby', () => {

  it('filtra dados por plataforma de streaming', () => {
    fakeData.length;

    const filteredData = filterBy(fakeData, 'streaming', 'netflix');
    expect(filteredData.every(item => item.extraInfo.streaming === 'netflix')).toBe(true);
  });
  it('filtra dados por plataforma de streaming Crunchyroll', () => {
    const filteredData = filterBy(fakeData, 'streaming', 'crunchyroll');
    expect(filteredData.every(item => item.extraInfo.streaming === 'crunchyroll')).toBe(true);
  });
  it('filtra dados por plataforma de streaming Star+', () => {
    const filteredData = filterBy(fakeData, 'streaming', 'star+');
    expect(filteredData.every(item => item.extraInfo.streaming === 'star+')).toBe(true);

  });

});
describe('computeStats', () => {
  it('Calculando as estatisticas de acordo com a classificação', () => {
    const resultado = computeStats(fakeData);
    const resultadoEsperado = {
      L: 20.0,
      A12: 20.0,
      A14: 20.0,
      A16: 40.0,
    }
    expect(resultado).toEqual(resultadoEsperado);
  });
  it('A soma das porcentagens deve ser 100', () => {
    const resultado = computeStats(fakeData);
    let somaPorcentagens = 0;
    for (const classificacao in resultado) {
      somaPorcentagens += resultado[classificacao];
    }
    expect(somaPorcentagens).toBe(100);
  })
});

describe('sortBy', () => {

  it('ordenação de dados pelos os anime de A-Z', () => {
    const ordenarData = sortBy(fakeData, 'name', 'asc')

    expect(ordenarData).toStrictEqual(mockCrescente);
  });
  it('ordenação de dados pelos os animes de Z-A', () => {
    const ordenarData = sortBy(fakeData, 'name', 'desc')
    expect(ordenarData).toStrictEqual(mockDecrescente);
  })
});
