const partners = () => {
    //Part 1 without firebase


    // fetch("./db/partners.json")
    // in devtools tab network we will see file parthers.json 
    // status 200 or 404 
    // example errorr in file /db/partners22222.json. we resive 404
    // 5xx its error from server when we get or set request
    // we can see tab headers in devtools with descriptions more information
    // tab preview - we can see contents this file

    // fetch("./db/partners.json")
    //     .then(res => {
    //         console.log(res)
    //         // we can see information about  our file but we can not see in convenient view its data 
    //       return  res.json()
    //     })
    //     .then(data => {
    //         renderItems(data)
    //     })
    //    .catch(error=>{
    //        console.log(error)
    //    })

    // //this obj data we can transport into some function, for erxample renderItems

    // const renderItems = (data) => {
    //     console.log(data)
    // }

    //Part 2 our database in firebase

    fetch("https://pizza-test-f5cf0-default-rtdb.firebaseio.com/db/partners.json")
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            renderItems(data)
        })
        .catch(error => {
            console.log(error)
        })



    // const renderItems = (data) => {
    //     // DZ: show all items in differents lines in console 
    //    data.forEach(element => {
    //        console.log(element)
    //    });
    // }


    //Part 3 create dynamic cards restarants

    const cardRestaurant = document.querySelector(".cards-restaurants")


    const renderItems = (data) => {

        data.forEach(element => {
            const { image, name, time_of_delivery, stars, kitchen, price, products } = element
            const a = document.createElement("a")
            a.setAttribute('href', '/restaurant.html')
            //   a.className="card cards-restaurant"
            a.classList.add("card")
            a.classList.add("cards-restaurant")
            a.dataset.products = products
            a.innerHTML = `		
<img src="${image}" alt="image" class="card-image" />
<div class="card-text">
    <div class="card-heading">
        <h3 class="card-title">${name}</h3>
        <span class="card-tag tag">${time_of_delivery} мин</span>
    </div>
     <div class="card-info">
        <div class="rating">
            ${stars}
        </div>
        <div class="price">От ${price} грн.</div>
        <div class="category">${kitchen}</div>
    </div>
 </div>

`
            cardRestaurant.append(a)
            a.addEventListener('click', (event) => {
                event.preventDefault()
                localStorage.setItem('restorant', JSON.stringify(element))
                window.location.href='/restaurant.html'
            })

        });

    }


    // processing transition to the page restaurant.html






}
export default partners