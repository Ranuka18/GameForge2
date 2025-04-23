function getFavoriteItem() {
  const favorite = JSON.parse(localStorage.getItem('favorite'));
  const container = document.getElementById('favorite-box');

  if (favorite) {
    let price = parseFloat(favorite.price.replace('$', ''));
    if (isNaN(price)) price = 0;

    container.innerHTML = `
      <div class= "fav-box">
        <img src="${favorite.image}">
        <div class= "fav-items" >
          <h2>${favorite.name}</h2>
          <p>Price: $${price.toFixed(2)}</p>
          <div class= "fav-butt">
            <button class="buy-butt" onclick="">Buy Now</button>
            <button class="remove-butt" onclick="removeFavorite()">Remove</button>
          </div>
        </div>  
      </div>
    `;
    
  } else {
    container.innerHTML = '<p class="empty-fav"> No favorite selected.</p>';
  }
}

function removeFavorite() {
  localStorage.removeItem('favorite');
  getFavoriteItem();
}

getFavoriteItem();
