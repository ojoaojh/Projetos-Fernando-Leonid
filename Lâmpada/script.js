const turnOn = document.getElementById ('turnOnOff');
//const turnOff = document.getElementById ('turnOn');
const lamp = document.getElementById ('lamp');


function isLampBroken(){
    return lamp.src.indexOf ('quebrada')> -1
}

function lampOn (){
    if (!isLampBroken()){
       
    lamp.src = './img/ligada.jpg';
    

}
}


function lampOff (){
    if (!isLampBroken()){
    lamp.src = './img/desligada.jpg'
}
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg'
}

function LampOnOff(){
    if (turnOnOff.textContent== 'Ligar'){
        lampOn();
        turnOnOff.textContent= 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent= 'Ligar';
    }
}



turnOnOff.addEventListener('click', LampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
