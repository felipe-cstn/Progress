var val = document.getElementById('progress');

const interval = setInterval(() =>{
    val.value += 10;
    if(val.value >= 100){
        //alert('Progresso completo!');
        clearInterval(interval);
    }
    if(val.value == 100){
        open("https://web.dio.me/");
    }
    

}, 1000);


