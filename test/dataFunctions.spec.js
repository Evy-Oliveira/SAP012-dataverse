import { filterBy, sortBy, computeStats} from '../src/dataFunctions.js';
import { data as fakeData, mockOriginal, mockCrescente, mockDecrescente} from './data.js';

// console.log(fakeData);



describe('filterby', () => {
  // fakeData

  it('filtra dados por plataforma de streaming', () => {
    fakeData.length;
    // let comparacaoStreaming = netflix
    const filteredData = filterBy(fakeData, 'streaming', 'netflix');
    expect(filteredData.every(item => item.extraInfo.streaming === 'netflix')).toBe(true);
  });
  // it('lida com a propriedade extraInfo ou filterBy ausente', () => {
  //   const filteredData = filterBy([{ name: 'Cardcaptor Sakura' }], 'streaming', 'netflix');

  //   // Verifica se a função lida corretamente com dados que não possuem a estrutura esperada
  //   expect(filteredData).toEqual([]);
  // });
  
});
describe('computeStats', () => {
  it('Calculando as estatisticas de acordo com a classificação', () => {
    const resultado = computeStats(fakeData);
    const resultadoEsperado = {
      L: 20.0,
      // A10: 4.17,
      // A12: 33.33,
      A12: 20.0,
      A14: 20.0,
      A16: 40.0,
      // A18: 8.33,
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
    // console.log(ordenarData);
    expect(ordenarData).toStrictEqual(mockCrescente);
  });
  it('ordenação de dados pelos os animes de Z-A', () => {
    const ordenarData = sortBy(fakeData, 'name', 'desc')
    expect(ordenarData).toStrictEqual(mockDecrescente);
  })
});
