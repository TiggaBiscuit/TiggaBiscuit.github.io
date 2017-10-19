var screens = [['Games', '#F26430'], ['Anime', '#009DDC'], ['Boardgames', '#6761A8'], ['Memes', '#CB48B7'], ['Hanzo Mains', '#009B72']];
var descriptorE1 = document.querySelector('.descriptor');
var speed = 300;
var item = screens[Math.floor(Math.random() * screens.length)];

function changeScreen(index){
    descriptorE1.innerHTML = screens[index][0];
    document.body.style.backgroundColor = screens[index][1];
}

function start() {
    var index = 0;
    setInterval(function(){
        if(index === screens.length){
            index = 0
        };
        changeScreen(index);
        index++;
    }, speed);
}

start();