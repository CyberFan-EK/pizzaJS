const menu = ()=> {
    
// Part 3

const changeTtile = ({kitchen, name, price})=> {
    const restaurantTitle = document.querySelector('.restaurant-title')
    const priceTitle = document.querySelector('.price')
    const categoryTitle = document.querySelector('.category')

    restaurantTitle.textContent=name
    priceTitle.textContent=price
    categoryTitle.textContent=kitchen

    }

if(localStorage.getItem('restorant')) {
    
    const {image, kitchen, name, price, products, stars, time_of_delivery} = JSON.parse(localStorage.getItem('restorant'))
    changeTtile({kitchen, name, price})



    fetch(`./db/${products}`).then(res=>res.json())
    .then(data=>renderItems(data)
    )
    .catch(error=>{
        console.log(error)
    })
} else {
    window.location.href="/"
}



// const renderItems = (data)=> {
//     data.forEach(element => {
//         console.log(element)
//     });
// }

// change variable restorant for example tanuki and show it how result


// go to the firebase https://console.firebase.google.com/
// create new projest and go to the realtime database -> create database -> start in test mode. Now DB is created and click 3 dots import and select db.json in our computer
// in the end we have a link with our db https://pizza-test-f5cf0-default-rtdb.firebaseio.com/


//Part 3

const cardsMenu = document.querySelector('.cards-menu')

const renderItems = (data)=> {
    data.forEach(element => {
        const {description, id, image, name, price} = element
        console.log(element)
      const card = document.createElement('div')
      card.classList.add('card')
     card.innerHTML= `
     <img src="${image}" alt="image" class="card-image" />
     <div class="card-text">
         <div class="card-heading">
             <h3 class="card-title card-title-reg">${name}</h3>
         </div>
         <!-- /.card-heading -->
         <div class="card-info">
             <div class="ingredients">${description}
             </div>
         </div>
         <!-- /.card-info -->
         <div class="card-buttons">
             <button class="button button-primary button-add-cart">
                 <span class="button-card-text">В корзину</span>
                 <span class="button-cart-svg"></span>
             </button>
             <strong class="card-price-bold">${price} грн.</strong>
         </div>
     </div>
     
     
     `
     cardsMenu.append(card)
    });
}


}

export default menu