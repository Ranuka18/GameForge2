  const btns=[
    {
      id: 1,
      name: 'Processors'
    },
    {
      id: 2,
      name: 'Graphic Cards'
    },
    {
      id: 3,
      name: 'MotherBoards'
    },
    {
      id: 4,
      name: 'Memory (RAM)'
    },
    {
      id: 5,
      name: 'Storage Devices'
    }, 
  ]

  const filters =  [...new Set(btns.map((btn)=>
      {return btn} ))]

  document.getElementById('btns').innerHTML=filters.map((btn)=>{
    var {name, id} =btn;
    return(
       "<button class='fil-p' onclick = 'filterItems(" + (id) + `)'>${name}</button>`
    )
  }).join('');

  const product=[
    {
      id: 1,
      cartId: 101,
      image: 'img85.jpg',
      title: 'Ryzen 9 9950x3d  ',
      price: '$699',
      category: 'Processor',
    },

    {
      id: 2,
      cartId: 131,
      image: 'img82.jpg',
      title: 'MSI GeForce RTX™ 5090 32G VENTUS',
      price: '$2969',
      category: 'Graphic Card',
    },

    {
      id: 2,
      cartId: 102,
      image: 'img84.jpg',
      title: 'PowerColor Reaper AMD Radeon RX 9070',
      price: '$959',
      category: 'Graphic Card',
    },

    {
      id: 3,
      cartId: 103,
      image: 'img68.jpg',
      title: 'Gigabyte B650 GAMING ',
      price: '$209',
      category: 'Motherboard',
    },

    {
      id: 3,
      cartId: 104,
      image: 'img64.jpg',
      title: 'ASUS TUF GAMING B650-PLUS ',
      price: '$210',
      category: 'Motherboard',
    },

    {
      id: 5,
      cartId: 105,
      image: 'img67.webp',
      title: 'Lexar® NM790 SSD ',
      price: '$244.99',
      category: 'Storage Device',
    },

    {
      id: 4,
      cartId: 106,
      image: 'img60.jpg',
      title: 'Trident Z5 Neo RGB (DDR5/AMD EXPO)',
      price: '$94.99',
      category: 'Memory (RAM)',
    },
    
    {
      id: 1,
      cartId: 107,
      image: 'img75.jpg',
      title: 'Intel Core i9-14900K',
      price: '$659',
      category: 'Processor',
    },

    {
      id: 3,
      cartId: 108,
      image: 'img79.jpg',
      title: 'ASUS ROG MAXIMUS Z890',
      price: '$999',
      category: 'Motherboard',
    },

    {
      id: 2,
      cartId: 109,
      image: 'img81.jpg',
      title: 'ASRock Intel Arc B580 Challenger',
      price: '$399',
      category: 'Graphic Card',
    },

    {
      id: 4,
      cartId: 110,
      image: 'img72.jpg',
      title: 'Trident Z5 Neo',
      price: '$649',
      category: 'Memory (RAM)',
    },

    {
      id: 3,
      cartId: 111,
      image: 'img66.jpg',
      title: 'ASRock B760M STEEL LEGEND',
      price: '$199',
      category: 'Motherboard',
    },

    {
      id: 1,
      cartId: 112,
      image: 'img90.jpg',
      title: 'Intel Core i7-14700KF',
      price: '$479',
      category: 'Processor',
    },

    {
      id: 2,
      cartId: 113,
      image: 'img78.jpg',
      title: 'ASUS Dual GeForce RTX 4060 EVO',
      price: '$419',
      category: 'Graphic Card',
    },

    {
      id: 1,
      cartId: 114,
      image: 'img77.jpg',
      title: 'AMD Ryzen Threadripper 7970X',
      price: '$3099',
      category: 'Processor',
    },

    {
      id: 5,
      cartId: 116,
      image: 'img63.webp',
      title: 'WD Black SN850X 8TB',
      price: '$449',
      category: 'Storage Device',
    },

    {
      id: 4,
      cartId: 117,
      image: 'img70.jpg',
      title: 'Corsair Vengeance DDR5 32 GB DDR5',
      price: '$139',
      category: 'Memory (RAM)',
    },
    
    {
      id: 4,
      cartId: 118,
      image: 'img73.jpg',
      title: 'T-Force Xtreem ARGB 32GB DDR4',
      price: '$89',
      category: 'Memory (RAM)',
    },
    
    {
      id: 5,
      cartId: 119,
      image: 'img61.jpg',
      title: 'Samsung 990 Pro 1TB SSD',
      price: '$119',
      category: 'Storage Device',
    },
    
    {
      id: 5,
      cartId: 120,
      image: 'img69.webp',
      title: 'T-Force Z540 2TB SSD',
      price: '$219',
      category: 'Storage Device',
    },
    
    {
      id: 3,
      cartId: 121,
      image: 'img80.jpg',
      title: 'ASRock X870E Taichi',
      price: '$689',
      category: 'Motherboard',
    },
    
    {
      id: 2,
      cartId: 122,
      image: 'img83.jpg',
      title: 'AORUS GeForce RTX 5080 MASTER',
      price: '$1999',
      category: 'Graphic Card',
    },

    {
      id: 4,
      cartId: 123,
      image: 'img88.jpg',
      title: 'G.Skill Aegisvv32GB DDR4',
      price: '$69',
      category: 'Memory (RAM)',
    },

    
    {
      id: 1,
      cartId: 124,
      image: 'img87.jpg',
      title: 'AMD Ryzen 7 9800X3D ',
      price: '$669',
      category: 'Processor',
    },
    
    {
      id: 1,
      cartId: 125,
      image: 'img89.jpg',
      title: 'AMD Ryzen 5 7600 Wraith Stealth',
      price: '$249',
      category: 'Processor',
    },

    {
      id: 5,
      cartId: 126,
      image: 'img71.jpg',
      title: 'Samsung 990 EVO Plus 1Tb SSD',
      price: '$99',
      category: 'Storage Device',
    },

    {
      id: 5,
      cartId: 127,
      image: 'img74.jpg',
      title: 'Kingston SSD NV3 2TB',
      price: '$179',
      category: 'Storage Device',
    },

    {
      id: 4,
      cartId: 128,
      image: 'img76.jpg',
      title: 'Textorm 32GB DDR4 ',
      price: '$79',
      category: 'Memory (RAM)',
    },

    {
      id: 2,
      cartId: 129,
      image: 'img88.jpg',
      title: 'Gigabyte GeForce RTX 5070 ',
      price: '$779',
      category: 'Graphic Card',
    },

    {
      id: 3,
      cartId: 130,
      image: 'img91.jpg',
      title: 'MSI MEG X870E GODLIKE',
      price: '$1599',
      category: 'Motherboard',
    },

  ];

  const categories = [...new Set(product.map((item)=> 
    {return item}))]

    const filterItems = (a) => {
      const filterCategories = categories.filter((item) => { 
          if (item.id == a) { 
              return item;  
          }
      });
  
      displayItem(filterCategories); 
  };

  const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
      const { image, title, price, cartId } = item;
      return(
        `<div class= 'box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <h3> ${title}</h3>
        <h2> Price : ${price}.00</h2>
        <div class = 'button-row'>
        <button class='cart-button' onclick='addToCart(${cartId})'>Add to Cart</button>
        <button class="favorite-btn" onclick='addToFavorite(${JSON.stringify(item)})'>❤️</button>
        <button class='buy-now'>Buy Now</button>
        </div>
        </div>
        </div>`)

    }).join('');
  }

  displayItem(categories);

  const addToCart = (cartId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productToAdd = product.find((item) => item.cartId === cartId);
    let existingProduct = cart.find((item) => item.cartId === cartId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...productToAdd, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productToAdd.title} added to cart!`);
};

function addToFavorite(item) {
  const favoriteItem = {
    id: item.cartId,
    name: item.title,
    price: item.price,
    image: item.image
  };
  localStorage.setItem('favorite', JSON.stringify(favoriteItem));
}

