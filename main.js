
/*
sleep(1000);
console.log('hello');

let to = setTimeout(function(){
    console.log('hello');
},1000);

clearTimeout(to);



while(1){
    console.log('hello');
    sleep(1000);
}

let interval = setInterval(function(){
    console.log('hello');
},1000);
clearInterval(interval);
*/



let bird = {
    y:0.5,
    status:true
}


let tuyaux= [
    {
        y:Math.random(),
        x:0.5,
        id:0
    },
    {
        y:Math.random(),
        x:1,
        id:1
    }
]

let jumpy = 15;

function render(){
    $('body').html('');
    $('body').append(`<div class=bird style="top:${bird.y * 100}%" > <div>`);
    tuyaux.forEach(function(e,i){
        $('body').append(`
        <div class=tuyau style="top:calc(${e.y * 100}% - 1000px);left:calc(${e.x*100}% - 25px)" >
        </div>`);
    })
}


function gravity(){
    if(jumpy==0){
        bird.y = bird.y+0.015;
    }else{
        bird.y = bird.y-(0.002*jumpy);
        jumpy--;
    }
}

function jump(){
    jumpy=15;
}

function collision(collisionMgr = function(){}){
    
}

function tuyauxMgr(){
    tuyaux.forEach(function(e){
        e.x = e.x-0.01;
        if(e.x<=0){
            tuyaux.push({
                y:(Math.random()*0.8)+0.1,
                x:1,
                id:1
            });
            tuyaux.shift();
        }
    })
}


function refresh(){
    render();
    gravity();
    tuyauxMgr();
}



let itRefresh = setInterval(refresh,60);
