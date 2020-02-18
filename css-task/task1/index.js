
//获取两个按钮的DOM
var begin = document.getElementById("begin");
var end = document.getElementById("end");
//获取九宫格中每个格子的DOM
var wrap = document.getElementsByClassName("wrap");
var t;
var i;
//重置颜色
function reset(){
    for(i=0;i<9;i++){
        wrap[i].style.backgroundColor = "";
    }
}
function h(){
    reset();
    //创建一个空数组用于比较，避免获取重复的格子
    var num = new Array();
    //随机获取3个格子和3个颜色值
    for(i=0;i<3;i++){
        //随机获取数值0-8
        var randomNum = Math.floor(Math.random()*9);
        //比较随机获得的数值是否一样 
        if(num.indexOf(randomNum)==-1){
            num.push(randomNum);
            //随机获得3个颜色值
            var randomColor = "rgb(" + Math.ceil(Math.random()*255) +"," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
            //使用js修改css属性值
            wrap[randomNum].style.backgroundColor = randomColor; 
        }else {
            i--;
        }
    }
}
begin.onclick = function(){
    reset();
    //先清除再设置定时器，避免多次连续按开始闪按钮时，闪的越来越快
    clearInterval(t);
    t = setInterval("h()",1000);
}
end.onclick = function(){
    clearInterval(t);
    reset();
}

