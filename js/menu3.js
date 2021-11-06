
// Part 3
const restorant ='food-band'
fetch(`./db/${restorant}.json`).then(res=>res.json())
.then(data=>renderItems(data)
)
.catch(error=>{
    console.log(error)
})


const renderItems = (data)=> {
    data.forEach(element => {
        console.log(element)
    });
}

// change variable restorant for example tanuki and show it how result


// go to the firebase https://console.firebase.google.com/
// create new projest and go to the realtime database -> create database -> start in test mode. Now DB is created and click 3 dots import and select db.json in our computer
// in the end we have a link with our db https://pizza-test-f5cf0-default-rtdb.firebaseio.com/
