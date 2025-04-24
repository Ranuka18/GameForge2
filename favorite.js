function getFavoriteItem() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const container = document.getElementById('favorite-box');

  if (favorites.length === 0) {
    container.innerHTML = '<p class="empty-fav">No favorite selected.</p>';
    return;
  }

  container.innerHTML = favorites.map((item, index) => {
    const price = parseFloat(item.price.replace('$', '')) || 0;
    return `
      <div class="fav-box">
        <img src="${item.image}">
        <div class="fav-items">
          <h2>${item.title}</h2>
          <p>Price: $${price.toFixed(2)}</p>
          <div class="fav-butt">
            <button class="buy-butt" onclick="">Buy Now</button>
            <button class="remove-butt" onclick="removeFavorite(${index})">Remove</button>
          </div>
        </div>  
      </div>
    `;
  }).join('');
}


function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

getFavoriteItem();

