var icons = [
    "https://th.bing.com/th/id/R.ce3283b19ea3d6374b6addecebf717f8?rik=anx0l4TU90WFuw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-food-drink%2f1024%2f32355-kiwi-fruit-icon.png&ehk=pxxbuK5oZ3%2fHwIQrk8ilqVGm9FsdxWJX6lrww%2b8Ri9g%3d&risl=&pid=ImgRaw&r=0",
    "https://icons.veryicon.com/png/o/food--drinks/fruit-icon/blackberry-7.png",
    "https://th.bing.com/th/id/R.a32ef002e227f5fa9db71cfa806af45e?rik=T35K26yF2XQOnQ&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2076313.png&ehk=E9vTp9XoUiToZmbzZf%2fF2m01N6TJ3HygoeJEuhTDQYo%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.0d94061a491409a149b4199539fadc48?rik=xZt9p4V9%2ftjhEw&pid=ImgRaw&r=0"
];

function levelOne(){
    document.getElementById('game-one').style.display = "block";
    document.getElementById('game-two').style.display = "none";
    document.getElementById('game-three').style.display = "none";
    document.getElementById('error').style.display = "none";
    document.getElementById('welcome').style.display = "none";
    document.getElementById('level').innerHTML = 3;
}

function levelTwo(){
    document.getElementById('game-two').style.display = "block";
    document.getElementById('game-one').style.display = "none";
    document.getElementById('game-three').style.display = "none";
    document.getElementById('error').style.display = "none";
    document.getElementById('welcome').style.display = "none";
    document.getElementById('level').innerHTML = 4;
}

function levelThree(){
    document.getElementById('game-three').style.display = "block";
    document.getElementById('game-one').style.display = "none";
    document.getElementById('game-two').style.display = "none";
    document.getElementById('error').style.display = "none";
    document.getElementById('welcome').style.display = "none";
    document.getElementById('level').innerHTML = 6;
}

function playGame() {
    let level = document.getElementById('level').innerHTML;

    if (level === '') {
        document.getElementById('error').style.display = "block";
        document.getElementById('welcome').style.display = "none";
    } else if (level == 3) {
        let slots = document.getElementsByClassName('level-one-slot');
        document.getElementById('play-game').innerHTML = 'Spin Again';
        for (i=0; i < slots.length; i++) {
            let number = Math.floor(Math.random()*4);
            slots[i].innerHTML = '<img src="'+ icons[number] +'" style="width:150px" />';;
        }
    } else if (level == 4) {
        let slots = document.getElementsByClassName('level-two-slot');
        document.getElementById('play-game').innerHTML = 'Spin Again';
        for (i=0; i < slots.length; i++) {
            let number = Math.floor(Math.random()*4);
            slots[i].innerHTML = '<img src="'+ icons[number] +'" style="width:150px" />';;
        }
    } else {
        let slots = document.getElementsByClassName('level-three-slot');
        document.getElementById('play-game').innerHTML = 'Spin Again';
        for (i=0; i < slots.length; i++) {
            let number = Math.floor(Math.random()*4);
            slots[i].innerHTML = '<img src="'+ icons[number] +'" style="width:150px" />';;
        }
    }
}

function restartGame() {
    document.getElementById('game-three').style.display = "none";
    document.getElementById('game-one').style.display = "none";
    document.getElementById('game-two').style.display = "none";
    document.getElementById('error').style.display = "none";
    document.getElementById('welcome').style.display = "block";
    document.getElementById('level').innerHTML = '';
}