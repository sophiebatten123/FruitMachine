function levelOne(){
    document.getElementById('game-one').style.display = "block";
    document.getElementById('game-two').style.display = "none";
    document.getElementById('game-three').style.display = "none";
    document.getElementById('level').innerHTML = 3;
}

function levelTwo(){
    document.getElementById('game-two').style.display = "block";
    document.getElementById('game-one').style.display = "none";
    document.getElementById('game-three').style.display = "none";
    document.getElementById('level').innerHTML = 4;
}

function levelThree(){
    document.getElementById('game-three').style.display = "block";
    document.getElementById('game-one').style.display = "none";
    document.getElementById('game-two').style.display = "none";
    document.getElementById('level').innerHTML = 6;
}

function playGame() {
    let level = document.getElementById('level').innerHTML;

    if (level == 3) {
        let slots = document.getElementsByClassName('level-one-slot');
        for (i=0; i < slots.length; i++) {
            slots[i].innerHTML = 'PLAYING';
        }
    } else if (level == 4) {
        let slots = document.getElementsByClassName('level-two-slot');
        for (i=0; i < slots.length; i++) {
            slots[i].innerHTML = 'PLAYING';
        }
    } else {
        let slots = document.getElementsByClassName('level-three-slot');
        for (i=0; i < slots.length; i++) {
            slots[i].innerHTML = 'PLAYING';
        }
    }
}