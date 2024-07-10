console.log('r/place');

const canvas = document.querySelector('canvas');

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 var c = canvas.getContext('2d');
 
 var mouse ={
    x: undefined,
    y: undefined
 } 

 var colorArray = [

     '#affaa33',
     '#99ffaaa',
     '#00ff00',
     '#ff1100'
    
    ];

 
 var MaxRadius = 40;
 var MinRadius  = 2;

 window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y
    console.log(event);

 })
 window.addEventListener('resize',function(event){
    canvas.width  = widnow.innerWidth;
    canvas.height = window.innerHeight;
     
 })
 function Circle(x,y){

    this.x = x;
    this.y = y;

    this.draw = function(){
        c.beginPath();
        c.arc(x,y,radius,0,Math.PI * 2,false);
        c.strokeStyle = 'blue'
    }
 }
 function init(){
        
     var CircleArray = []
     
     for(var i = 0;i< 100;i++){
         var radius = 30;
         var x = Math.random()*(innerWidth - radius * 2) + radius;
         var y = Math.random()* (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    CircleArray.push(new Circle(x,y,dx,dy,radius));
}
console.log(CircleArray);
function Animated(){
    requestAnimationFrame(Animated);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i =0;i<CircleArray.length;i++){
        CircleArray[i].update();
    }
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.strokeStyle = 'green';
    c.stroke();
    c.fill();
    // c.closePath();


    if(x > innerWidth || x - radius < 0){
        this.dx = -this.dx;
    }
    if(y + radius > innerHeight || y - radius < 0){
        this.dy-= this.dy;
    }
    this.x += this.dx;
    this.y += this.dx;

    // interactive
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50&& mouse.y - this.y < 50 ){
        if(this.radius < maxRadius){
            this.radius +=1;
            
        }
    }   else if(this.radius > minRadius){
        
        this.radius -=1;
    }

    
}
    this.draw();

    console.log('das');
}



// c.fillStyle='rgba(255,0,0,0.5)'
// c.fillRect(100,100,100,100);
// c.fillStyle='rgba(255,0,0,0.5)'

// c.fillRect(200,200,100,100);
// c.fillStyle='rgba(255,0,0,0.5)'

// c.fillRect(400,300,100,100);

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.strokeStyle="#fa34a3"
// c.stroke();

// // Arc / Circle
// // c.beginPath();
// // c.arc(300,300,30,0,Math.PI * 2,false);
// // c.strokeStyle = 'green';
// // c.stroke();


// for(let i = 0;i<10;i++){
//     var x = Math.random()* window.innerWidth;
//     var y = Math.random()* window.innerHeight;
//     c.beginPath();
// c.arc(x,y,30,0,Math.PI * 2,false);
// c.strokeStyle = 'green';
// c.stroke();

// }









// console.log(canvas)
