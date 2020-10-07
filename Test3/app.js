const container = document.getElementById('container');

function getCar(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(result => callback(result))
}


function displayCar(){

    getCar('https://backend.daviva.lt/API/InformacijaTestui', (car) => {
        let itemBar = document.createElement('div');
        itemBar.classList.add('itemBar');

        let itemImage = document.createElement('img');
        itemImage.src = car.nuotraukos[0];
        itemImage.classList.add('nuotraukos');
    
        let itemYear = document.createElement('div');
        itemYear.innerHTML = car.metai;
    
        let itemName = document.createElement('div');
        itemName.innerHTML=car.marke;
    
        let itemModel = document.createElement('div');
        itemModel.innerHTML=car.modelis;
    
        let itemPrice = document.createElement('div');
        itemPrice.innerHTML=car.kaina + ' €';
    
        itemBar.appendChild(itemImage);
        itemBar.appendChild(itemYear);
        itemBar.appendChild(itemName);
        itemBar.appendChild(itemModel);
        itemBar.appendChild(itemPrice);
        
        container.appendChild(itemBar);
    })
    
}

displayCar();