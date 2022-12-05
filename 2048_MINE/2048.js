// var board;
// var score = 0;
// var rows = 4;
// var columns = 4;

// window.onload = function() {
//     setGame();
// }

// function setGame() {
//     // board = [
//     //     [2, 2, 2, 2],
//     //     [2, 2, 2, 2],
//     //     [4, 4, 8, 8],
//     //     [4, 4, 8, 8]
//     // ];

//     board = [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0]
//     ]

//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             let tile = document.createElement("div");
//             tile.id = r.toString() + "-" + c.toString();
//             let num = board[r][c];
//             updateTile(tile, num);
//             document.getElementById("board").append(tile);
//         }
//     }
//     //create 2 to begin the game
//     setTwo();
//     setTwo();

// }

// function updateTile(tile, num) {
//     tile.innerText = "";
//     tile.classList.value = ""; //clear the classList
//     tile.classList.add("tile");
//     if (num > 0) {
//         tile.innerText = num.toString();
//         if (num <= 4096) {
//             tile.classList.add("x"+num.toString());
//         } else {
//             tile.classList.add("x8192");
//         }                
//     }
// }

// document.addEventListener('keyup', (e) => {
//     if (e.code == "ArrowLeft") {
//         slideLeft();
//         setTwo();
//     }
//     else if (e.code == "ArrowRight") {
//         slideRight();
//         setTwo();
//     }
//     else if (e.code == "ArrowUp") {
//         slideUp();
//         setTwo();

//     }
//     else if (e.code == "ArrowDown") {
//         slideDown();
//         setTwo();
//     }
//     document.getElementById("score").innerText = score;
// })

// function filterZero(row){
//     return row.filter(num => num != 0); //create new array of all nums != 0
// }

// function slide(row) {
//     //[0, 2, 2, 2] 
//     row = filterZero(row); //[2, 2, 2]
//     for (let i = 0; i < row.length-1; i++){
//         if (row[i] == row[i+1]) {
//             row[i] *= 2;
//             row[i+1] = 0;
//             score += row[i];
//         }
//     } //[4, 0, 2]
//     row = filterZero(row); //[4, 2]
//     //add zeroes
//     while (row.length < columns) {
//         row.push(0);
//     } //[4, 2, 0, 0]
//     return row;
// }

// function slideLeft() {
//     for (let r = 0; r < rows; r++) {
//         let row = board[r];
//         row = slide(row);
//         board[r] = row;
//         for (let c = 0; c < columns; c++){
//             let tile = document.getElementById(r.toString() + "-" + c.toString());
//             let num = board[r][c];
//             updateTile(tile, num);
//         }
//     }
// }

// function slideRight() {
//     for (let r = 0; r < rows; r++) {
//         let row = board[r];         //[0, 2, 2, 2]
//         row.reverse();              //[2, 2, 2, 0]
//         row = slide(row)            //[4, 2, 0, 0]
//         board[r] = row.reverse();   //[0, 0, 2, 4];
//         for (let c = 0; c < columns; c++){
//             let tile = document.getElementById(r.toString() + "-" + c.toString());
//             let num = board[r][c];
//             updateTile(tile, num);
//         }
//     }
// }

// function slideUp() {
//     for (let c = 0; c < columns; c++) {
//         let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
//         row = slide(row);
//         // board[0][c] = row[0];
//         // board[1][c] = row[1];
//         // board[2][c] = row[2];
//         // board[3][c] = row[3];
//         for (let r = 0; r < rows; r++){
//             board[r][c] = row[r];
//             let tile = document.getElementById(r.toString() + "-" + c.toString());
//             let num = board[r][c];
//             updateTile(tile, num);
//         }
//     }
// }

// function slideDown() {
//     for (let c = 0; c < columns; c++) {
//         let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
//         row.reverse();
//         row = slide(row);
//         row.reverse();
//         // board[0][c] = row[0];
//         // board[1][c] = row[1];
//         // board[2][c] = row[2];
//         // board[3][c] = row[3];
//         for (let r = 0; r < rows; r++){
//             board[r][c] = row[r];
//             let tile = document.getElementById(r.toString() + "-" + c.toString());
//             let num = board[r][c];
//             updateTile(tile, num);
//         }
//     }
// }

// function setTwo() {
//     if (!hasEmptyTile()) {
//         return;
//     }
//     let found = false;
//     while (!found) {
//         //find random row and column to place a 2 in
//         let r = Math.floor(Math.random() * rows);
//         let c = Math.floor(Math.random() * columns);
//         if (board[r][c] == 0) {
//             board[r][c] = 2;
//             let tile = document.getElementById(r.toString() + "-" + c.toString());
//             tile.innerText = "2";
//             tile.classList.add("x2");
//             found = true;
//         }
//     }
// }

// function hasEmptyTile() {
//     let count = 0;
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             if (board[r][c] == 0) { //at least one zero in the board
//                 return true;
//             }
//         }
//     }
//     return false;
// }

class BlockMap{
    constructor(row,column){
        this.Row = row;
        this.Column = column;
        this.Map = Array.from(Array(row), ()=> Array(column).fill(0));
        this.div_app = document.getElementById("app");        
    }
    addblock(x,y,block){
        block.setactive(true);
        block.setcoord(x,y);
        this.Map[x][y] = block;
        block.setcoord(x,y);
        
        this.div_app.appendChild(block.div_element)
    }
    addrandomblock(block){
        block.setactive(true);
        
        
        //랜덤 블록 위치 생성


        block.setcoord(x,y);
        this.Map[x][y] = block;
        this.div_app.appendChild(block.div_element)
    }
    removeblock(x,y){
        block.setactive(false);
        this.Map[x][y] = null;
    }
    moveleft(){
        
    }
    moveright(){

    }
    moveup(){

    }
    movedown(){

    } 

    draw(){
        //for(let i=0;i<this.Row;i++)
        //    for(let j=0;j<this.Column;j++)
        
        //this.Map[x][y]
    }
}

class Block{
    constructor(value){
        this.Value = value;
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
        this.div_element = document.createElement("div");
        this.div_element.setAttribute("class","blockPrefab")
        this.div_element.appendChild(document.createTextNode("2"));
    }
    changevalue(value){
        this.Value = value;
    }
    setactive(isActivated){
        this.Active = isActivated;        
    }
    setcoord(x,y){
        this.XPos += 150*x;
        this.YPos += 150*y;
        this.div_element.style.left = this.XPos;
        this.div_element.style.top = this.YPos;
    }
    removeblock(){
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
    }

}

function keyArrowRight(){
    console.log("Right Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        console.log(blocks[i].style.left);
        blocks[i].style.left += 170;                           
    }
}

function keyArrowLeft(){
    console.log("Left Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.left -= 170;        
    }
}
function keyArrowUp(){
    console.log("Up Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top -= 170;        
    }
}
function keyArrowDown(){
    console.log("Down Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top += 170;        
    }
}

var blockmap = new BlockMap(4,4);

function gameStart(){    
    blockmap.addblock(Math.floor(Math.random() * 4),Math.floor(Math.random() * 4),new Block(2));
}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':
            gameStart();
            break;
        case 'ArrowRight':
            blockmap.moveright();
            break;
        case 'ArrowLeft':
            blockmap.moveleft();
            break;
        case 'ArrowUp':
            blockmap.moveup();
            break;
        case 'ArrowDown':
            blockmap.movedown();
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;




