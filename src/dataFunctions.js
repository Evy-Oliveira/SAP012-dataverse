// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterBy = (data, filterBy, value) => {
  
  const itemSelecionado = data.filter(item => {
    if ('extraInfo' in item && filterBy in item.extraInfo)
      return item.extraInfo[filterBy] === value
  });

  return itemSelecionado;

};

export const computeStats = (data) => {
  const classifications = data.map(obj => obj.extraInfo.classification);

  const count = classifications.reduce((accumulator, classification) => {
    accumulator[classification] = (accumulator[classification] || 0) + 1;
    return accumulator;
  }, {});
  const productCount = classifications.length;

  const percents = Object.keys(count).reduce((accumulator, classification) => {
    accumulator[classification] = (count[classification] / productCount) * 100;
    return accumulator;
  }, {});
  return percents;
};

export const sortBy = (data, sortBy, sortOrder) => {
  const ordenacao = [...data];
   ordenacao.sort((a, b) => {
    let result = 0;

    if (a[sortBy] < b[sortBy]) {
     
        result = -1;
      } else {
        result = 1;
      }
 
    
    return result;
  });

  if(sortOrder === 'asc'){
    return ordenacao;
  } else{
    return ordenacao.reverse();
  }
  
};


