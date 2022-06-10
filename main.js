var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="green";
width=1;

var lastx,lasty;

var width=screen.width;
newwidth=screen.width-300;
var newheight=screen.height-300;
if (width < 992 ){
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)

{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    lastx = e.touches[0].clientX - canvas.offsetLeft;
     lasty = e.touches[0].clientY - canvas.offsetTop;

    console.log(color);
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_x = e.touches[0].clientX - canvas.offsetLeft;
     current_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(current_x,current_y);

    ctx.stroke();

lastx=current_x,lasty=current_y;
}


function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }