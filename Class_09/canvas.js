//캔버스
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

//
class Rect{
    constructor(boxtop,boxleft,boxH,boxW,color){
        this.boxtop = boxtop;
        this.boxleft = boxleft;
        this.boxH = boxH;
        this.boxW = boxW;
        this.color = color;

        
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle= this.color;
        ctx.rect(this.boxtop,this.boxleft,this.boxH,this.boxW);
        ctx.fill();
    }
}
var box1 = new Rect(50,50,200,200,"red");
box1.draw(ctx);

canvas.onmousemove = function(event){
    const x = event.clientX - ctx.canvas.offsetLeft;
    const y = event.clientY - ctx.canvas.offsetTop;
    console.log("e")
}