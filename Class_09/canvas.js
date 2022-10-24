//캔버스
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

//class
class Rect{
    constructor(px,py,w,h,color){
        this.px = px;
        this.py = py;
        this.w = w;
        this.h = h;
        this.color = color;
        this.clicking = 0;
        ctx.fillStyle = "";
    }
    // 마우스의 x 좌표가 버튼의 너비(시작)보다 크고 너비(끝)보다 작다
    // 마우스의 y 좌표가 버튼의 높이(시작)보다 크고 높이(끝)보다 작다
    // 이때 버튼을 파란색으로 바꿈
    btnUpdate(){
        if((x>=this.px && x<=this.ps+this.w) && (y >=this.py &&y <=py+this.h))
        {
            ctx.fillStyle = "blue";
        }else if(( x>=this.px || x<=this.px+this.w ) || ( y>=this.py || y<=this.py+this.h ))
        {
            ctx.fillStyle = "red";
            this.clicking = 0;
        }
    }
    //...
    //
    btnClicking(){
        if((x>=this.px && x<=this.ps+this.w) && (y >=this.py &&y <=py+this.h)){
            this.clicking = 1;
            ctx.fillStyle = "gray";
            ctx.fill();
        }
    }

}
var btn1 = new Rect(50,50,200,200,"yellow");
function btnUpdate(){
    btn1.btnUpdate();
}
canvas.onclick = function(event){
    btn1.btnClicking();
}