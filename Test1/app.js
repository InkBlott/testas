const container = document.getElementById('container');

fetch('https://backend.daviva.lt/API/InformacijaTestui')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCar(data)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function displayCar(car){
    console.log(car);
    let itemBar = document.createElement('div');
    itemBar.classList.add('itemBar');

    let itemYear = document.createElement('div');
    itemYear.innerHTML = car.metai;

    let itemName = document.createElement('div');
    itemName.innerHTML=car.marke;

    let itemModel = document.createElement('div');
    itemModel.innerHTML=car.modelis;

    let itemPrice = document.createElement('div');
    itemPrice.innerHTML=car.kaina + '€';

    itemBar.appendChild(itemYear);
    itemBar.appendChild(itemName);
    itemBar.appendChild(itemModel);
    itemBar.appendChild(itemPrice);
    
    container.appendChild(itemBar);

}
