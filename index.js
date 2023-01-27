let container = document.getElementById("container")


fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0])
   
    for(let i = 0; i < data.length; i ++) {

     let productCard = document.createElement('div')

     productCard.className = 'product-card'

     productCard.innerHTML = `
        <img src="${data[i].image}" alt="An image of ${data[i].title} " class="product-img">
        <p class="title">${data[i].title}</p>
        <p class="price">€${data[i].price}</p>
        `

    container.appendChild(productCard)
    }

  });
