import { computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// console.log(fakeData);

// describe('example', () => {
//   fakeData

//   it('returns `example`', () => {
//     fakeData.length;
//     expect(example()).toBe('example');
//   });
// });

describe('computeStats', () => {
  it('Calculando as estatisticas de acordo com a classificação', () => {
    const resultado = computeStats(fakeData);
    const resultadoEsperado = {
      L: 4.17,
      A10: 4.17,
      A12: 33.33,
      A14: 37.5,
      A16: 12.5,
      A18: 8.33,
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
