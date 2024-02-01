export const renderItems = (data) => {
  const cartoes = document.createElement('ul');
  cartoes.classList.add('cartoes');
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  data.forEach((item) => {
    cartoes.innerHTML += `
    <li class="cartao" itemscope itemtype="${item.id}">
      <section class="info-externa">
        <p><span itemprop="classification">${item.extraInfo.classification}</span></p>
        <figure> <img  itemprop="imageUrl" src="${item.imageUrl}"  title="${item.name}"></figure>
        <h5><span itemprop="name">${item.name}</span></h5>
        <p><span itemprop="assessment">${parseFloat(item.extraInfo.assessment)}</span></p>
        <p><span itemprop="streaming">${item.extraInfo.streaming}</span></p>
        <p>Temporadas <span itemprop="seasons">${item.extraInfo.seasons}</span></p>
        <button onclick="openModal('${item.id}')">Curiosidades</button>
      </section>
      <section class="curiosidades" id="modal-${item.id}">
        <span class="close" onclick="closeModal('${item.id}')">&times;</span>
        <h6><span itemprop="shortDescription">${item.shortDescription}</span ></h6 >
        <p><span itemprop="description">${item.description}</span>.</p>
        <p>Episódios: <span itemprop="episodes">${item.extraInfo.episodes}</span></p>
        <p>Canção: <span itemprop="song">${item.extraInfo.song.join(", ")}</span></p>
        <p>Criador: <span itemprop="creator">${item.facts.creator}</span></p>
        <p>Produtor: <span itemprop="producer">${item.facts.producer}</span></p>
        <p>Studio: <span itemprop="studio">${item.facts.studio}</span></p>
      </section >
    </li >
  `;
  })
  return cartoes;
};
export const renderListClassification = (percents)=>{
  const ul = document.createElement('ul');
  ul.id = "listaClassificacao";

  for(const classification in percents){
    const li = document.createElement('li');
    li.textContent = `Classicação ${classification}: ${percents[classification].toFixed(2)}%`;
    ul.appendChild(li);
  }
  return ul;
}
















    
    
  
