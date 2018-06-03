var con = document.getElementById('container');
var wraper = document.getElementById('wraper');
var oImag = wraper.getElementsByTagName('img')[0];
var oImagWidth = oImag.offsetWidth;
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var btns = document.getElementById('btns').getElementsByTagName('span');
var timer = null;
var index = 1; //是1--因为图从开头多加的5开始,但是应该从图1开始,所以index=1,把图5错过去,图五为0

function showBtns() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = '';
    }
    btns[index - 1].className = 'on'; //index为1,++后为2,所以-1再回到第一个
}


next.onclick = function() {
    index++;
    if (index == 6) {
        index = 0;
        wraper.style.left = -index * oImagWidth + 'px';
        wraper.style.transition = 'all 0s';
        wraper.style.webkitTransition = 'all 0s';
        index = 1;
    }
    setTimeout(function() {
            wraper.style.left = -index * oImagWidth + 'px';
            wraper.style.transition = 'all 0.3s';
            wraper.style.webkitTransition = 'all 0.3s';
        }, 0)
        //按钮跟随
    showBtns();
}
prev.onclick = function() {
    index--;
    if (index == 0) {
        index = 6;
        wraper.style.left = -index * oImagWidth + 'px';
        wraper.style.transition = 'all 0s';
        wraper.style.webkitTransition = 'all 0s';
        index = 5;
    }
    //消除滚动回第一张的动画
    setTimeout(function() {
            wraper.style.left = -index * oImagWidth + 'px';
            wraper.style.transition = 'all 0.3s';
            wraper.style.webkitTransition = 'all 0.3s';
        }, 0)
        //按钮跟随
    showBtns();
}



function play() {
    timer = setInterval(function() {
        next.onclick();
    }, 2000)
}

function stop() {
    clearTimeout(timer);
}
play();
con.onmouseover = stop;
con.onmouseout = play;



for (var i = 0; i < btns.length; i++) {

    (function(i) {
        btns[i].onclick = function() {
            for (var j = 0; j < btns.length; j++) {
                btns[j].className = '';
            }
            this.className = 'on';
            index = i + 1; //下面的图标跟图片相差一
            wraper.style.left = -index * oImagWidth + 'px';
            wraper.style.transition = 'all 0.4s';
        }
    }(i))
}