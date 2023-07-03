let intervalID;

function calculateAge()
{
    clearInterval(intervalID);

    intervalID=setInterval(() =>{
    let birthdate = new Date(document.getElementById('birthdate').value);
    let now= new Date();
    let age_Ms= now.getTime() - birthdate.getTime();
    let age_Sec=age_Ms/1000;
    let age_Min=age_Sec/60;
    let age_Hrs=age_Min/60;
    let age_Days=age_Hrs/24;
    let age_Mon=age_Days/30.4375;
    let age_Years=age_Mon/12;

    document.querySelector('#years').innerHTML = Math.floor(age_Years);
    document.querySelector('#months').innerHTML = Math.floor(age_Mon % 12);
    document.querySelector('#days').innerHTML = Math.floor(age_Days % 30.4375);
    document.querySelector('#hours').innerHTML = Math.floor(age_Hrs % 24);
    document.querySelector('#minutes').innerHTML = Math.floor(age_Min % 60);
    document.querySelector('#seconds').innerHTML = Math.floor(age_Sec % 60);
    document.querySelector('#seconds').style.borderBottom= '1px grey solid';
    },1000);
}

function reset(){
    clearInterval(intervalID);
    window.location.reload();
}