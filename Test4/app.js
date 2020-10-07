const container = document.getElementById('container');




function displayCar(){
    let currNum = 0;
    let carData

    function getCar(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data=>carData=data)
            .then(result => callback(result))
    }

    getCar('https://backend.daviva.lt/API/InformacijaTestui', (car) => {
        let itemBar = document.createElement('div');
        itemBar.classList.add('itemBar');

        let imageBar = document.createElement('div');
        imageBar.classList.add('imageBar')
        
        let buttonLeft = document.createElement('button');
        buttonLeft.onclick=() => {
            if(currNum > 0) {
                currNum--;
                itemImage.src = carData.nuotraukos[currNum];
            } else if (currNum === 0){
                currNum = (car.nuotraukos.length) - 1 ;
                itemImage.src = carData.nuotraukos[currNum];
            }
        }

        buttonLeft.innerHTML='<'

        let buttonRight = document.createElement('button');
        buttonRight.onclick= () => {
            if(currNum < (car.nuotraukos.length - 1)) {
                currNum++;
                itemImage.src = carData.nuotraukos[currNum];
            } else if (currNum === (car.nuotraukos.length) - 1){
                currNum = 0 ;
                itemImage.src = carData.nuotraukos[currNum];
            }
        }
        buttonRight.innerHTML='>'

        let itemImage = document.createElement('img');
        itemImage.src = car.nuotraukos[0];
        itemImage.classList.add('nuotraukos');

        imageBar.appendChild(itemImage);
        imageBar.appendChild(buttonLeft);
        imageBar.appendChild(buttonRight);
    
        let itemYear = document.createElement('div');
        itemYear.innerHTML = car.metai;
    
        let itemName = document.createElement('div');
        itemName.innerHTML=car.marke;
    
        let itemModel = document.createElement('div');
        itemModel.innerHTML=car.modelis;
    
        let itemPrice = document.createElement('div');
        itemPrice.innerHTML=car.kaina + ' €';
    
        itemBar.appendChild(imageBar);
        itemBar.appendChild(itemYear);
        itemBar.appendChild(itemName);
        itemBar.appendChild(itemModel);
        itemBar.appendChild(itemPrice);
        
        container.appendChild(itemBar);
    })
    
}

displayCar();