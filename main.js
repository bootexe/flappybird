
function sleep(e){
    return e;
}


sleep(1000);
console.log('hello');

let to = setTimeout(function(){
    console.log('hello');
},1000);

clearTimeout(to);


/*
console.log('world')    while(1){
                            console.log('hello');
                            sleep(1000);
                        }
*/
let interval = setInterval(function(){
    console.log('hello');
},1000);
console.log('world');



clearInterval(interval);



let arr = [4,5,234,56,245]

arr.push(65)
//[4,5,234,56,245,65]
arr.shift() //return 4
//[5,234,56,245,65]
arr.pop()//return 65
//[5,234,56,245]
arr.length
// dernier index =  arr.length-1

const notVar = -1;
let lvar = 0;
var variable;

var obj = {
    "éfezs>":2,
    fezf:3,
    obj:{
        one:1
    },
    t:function(e,i){
        return e+i; 
    },
    arr:[0,1,21,43245,function(){console.log('hello')}]
}

function hey(denominateur=1){
    if(!isNaN(denominateur)) 
        return 1/denominateur;
    else
        throw 'not a number';
}

hey();  //return 1/1
hey(1); //return 1/1
hey(8); //return 1/8


obj.fezf        //return 3
obj.obj.one     //return 1
obj["éfes>"]    //return 2
obj.t(1,2)      //return 3
obj.arr.push(5); 
obj.arr[4]();   //affioche hello

document.querySelectorAll('#id').HTMLcontent
$('#id ~ .game').html();
$('.game').html('grzgez<h1></h1>');
$('.game').html('fcdsceqf')
$('.game').append($('<h1>Heelo</h1>'))
$('.game').prepend($('<h1>Heelo</h1>'))
$('.game').html('<h1>bye</h1>');
$('.game').text('efzf fezf');
$('.game').addClass('active');      //<input type=text class="active" />
$('.game').removeClass('active');   //<input type=text class="" />
$('.game').css('background','red'); //<input type=text class="" style=background:red />
$('.game').attr('name','hello');    //<input type=text class="" style=background:red name=hello  />
$('.game').prop('disabled',true);   //<input type=text class="" style=background:red name=hello disabled />
/*$('.game').transit({opacity:0,top:100},'ease',1000,function(){
    console.log('done')
});*/



//document.querySelectorAll('.game')    /*HTML*/    //!= $('.game')    /*Jquery*/
//document.querySelectorAll('.game')    /*HTML*/    == $('.game')[0] /*HTML*/ 
//$(document.querySelectorAll('.game')) /*Jquery*/  == $('.game')    /*Jquery*/
//$(document.querySelectorAll('.game')) = $($('.game')[0]) = $('.game')

$('.game').find('*');
$('.game').parent('body');
$('.game').parents('body');
$('*:has( + .tuyau)');

$('.button').on('click',function(e){
    $(e.currentTarget).attr('operator');  //return "+";
})


switch(e){
    case "+":
        //some function
        //a+b
    break;
    case "-":
        //some function
        //a-b
    break;
    default:
        //console.err('pas reconnu');
    break;
}




function hello(ctx){
    ctx = $(ctx)
    $(ctx).text('hello');
}

$('.game');
//$(<h1></h1>);
$(document.querySelectorAll('.game'))
$($('.game'));

hello('.game');
hello($('.game'));
hello(document.querySelectorAll('.game'));

class Rectangle {
    constructor(h,w){
        this.h = h;
        this.w = w;
    }

    get aire(){
        setTimeout(function(){
            fetch('https://raphaelattal.com/api.php',{
                method:'GET',
                mode:'cors'
            });
        },10);
        return this.h*this.w;
    }
    set aire(val){
       this.h =  Math.sqrt(val);
       this.w =  this.h;
    }

}

let square = new Rectangle(10,10);


let expr = 'toto';

let o = {
    get current(){
        return this.data.pop();
    },
    set current(name){
        this.data.push(name);
    },
    set [expr](e){
        console.log(e);
        this.data.push(e);
    },
    data:[]
}

delete o.toto;

Object.defineProperty(o,"faffe",{ set:function(x){
    this.data.push(x);
},get:function(){
    return this.data.shift();
}});



let score = 0;
let bird = {
    y:0.4,
    x:0.1,
    status:true
}


let tuyaux= [
    {
        y:0.5,
        x:0.5,
        id:0
    },
    {
        y:Math.random(),
        x:1,
        id:1
    }
];

let jumpy = 7;

function render(){
    $('body .game').html('');
    $('body .game').append(`<div class=bird style="top:${bird.y * 100}%;left:${bird.x*100}%" > <div>`);
    tuyaux.forEach(function(e,i){
        $('body .game').append(`
        <div class=tuyau style="top:calc(${e.y * 100}% - 950px);left:calc(${e.x*100}% - 25px)" >
        </div>`);
    })
    $('body .game').append(`<h1 class=score >${score}</h1>`);
}


function gravity(){
    if(jumpy==0){
        bird.y = bird.y+0.015;
    }else{
        bird.y = bird.y-(0.003*jumpy);
        jumpy--;
    }
}

function jump(){
    jumpy = 7;
}

function collision(collisionMgr = function(){}){
    if(bird.y>1){
        over();
    }
    tuyaux.forEach(function(e){
        if((e.x-0.12<=bird.x)&&(e.x+0.0>=bird.x)){
            console.log('TUYAU VALID',e,bird);
            if(e.y-0.12<bird.y && e.y+0.12>bird.y){
                scoreUp();
            } 
            else{
                over();
            }
        }
    })
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

function scoreUp(){
    score+=(1/12);
}
function refresh(){
    render();
    gravity();
    tuyauxMgr();
    collision();
}

function over(){
    console.log('GAME OVER');
    clearInterval(itRefresh);
}

let itRefresh = setInterval(refresh,60);

$('body').on('click',function(e){
    jump();
})
