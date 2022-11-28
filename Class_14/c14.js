function keyArrowRight(){
    console.log("Right Pressed.");
    let block = document.getElementsByClassName("blocks");
    for (let i = 0; i < block.length; i++){
        console.log(block[i].style.left);
        block[i].style.left += 170;                           
    }
}

function keyArrowLeft(){
    console.log("Left Pressed.");
    let block = document.getElementsByClassName("blocks");
    for (let i = 0; i < block.length; i++){
        block[i].style.left -= 170;        
    }
}
function keyArrowUp(){
    console.log("Up Pressed.");
    let block = document.getElementsByClassName("blocks");
    for (let i = 0; i < block.length; i++){
        block[i].style.top -= 170;        
    }
}
function keyArrowDown(){
    console.log("Down Pressed.");
    let block = document.getElementsByClassName("blocks");
    for (let i = 0; i < block.length; i++){
        block[i].style.top += 170;        
    }
}


function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':
            gameStart();
            break;
        case 'ArrowRight':
            keyArrowRight();
            break;
        case 'ArrowLeft':
            keyArrowLeft();
            break;
        case 'ArrowUp':
            keyArrowUp();
            break;
        case 'ArrowDown':
            keyArrowDown();
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;
