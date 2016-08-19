/**
 * Created by zzj on 2016/5/2.
 */
//首页轮播
window.onload=function() {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;

    function showbutton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = ' ';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate(offset) {
        animate:true;
        var newleft = parseInt(list.style.left) + offset;
        var time = 700;
        var interval = 10;
        var speed = offset / (time / interval);
        var f=0;
        function go() {
            animate:false;
            if ((speed < 0 && parseInt(list.style.left) > newleft) || speed > 0 && parseInt(list.style.left) < newleft) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                list.style.left = newleft + 'px';
                if (newleft > -1364) {
                    list.style.left = -4092 + 'px';
                }
                if (newleft < -4092) {
                    list.style.left = -1364 + 'px';
                }
            }
            hideDwText0();
        }
        go();
        setTimeout("DwText0()",1000);

    }

    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3500);

    }

    function stop() {
        clearInterval(timer);
    }

    next.onclick = function () {
        if (index == 3) {
            index = 1;
        }
        else {
            index += 1;
        }
        showbutton();
        animate(-1364);
    };
    prev.onclick = function () {
        if (index == 1) {
            index = 3;
        }
        else {
            index -= 1;
        }
        showbutton();
        animate(1364);
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1364 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showbutton();

        }
    }
    container.onmouseout = play;
    container.onmouseover = stop;
    play();
}
function aShow(li) {
     var showList=li.getElementsByTagName("ul")[0];
    showList.style.display="block";
}
function aHide(li){
    var hideList=li.getElementsByTagName("ul")[0];
    hideList.style.display="none"
}
//红色文字区域
function DwText0() {
        var i=parseInt(list.style.left);
        var s=i/1364;
        document.getElementById('atext').style.display="block";
        ctext.style.top = s*70 + "px";
        document.getElementById('ctext').style.display = "block";

}
function hideDwText0() {
        document.getElementById('atext').style.display="none";
        document.getElementById('ctext').style.display="none";
}

function showred_1() {
    document.getElementById('img_1').style.opacity="1";
}
function hidered_1() {
    document.getElementById('img_1').style.opacity="0";
}
function showred_2() {
    document.getElementById('img_2').style.opacity="1";
}
function hidered_2() {
    document.getElementById('img_2').style.opacity="0";
}
function showred_3() {
    document.getElementById('img_3').style.opacity="1";
}
function hidered_3() {
    document.getElementById('img_3').style.opacity="0";
}
function showred_4() {
    document.getElementById('img_4').style.opacity="1";
}
function hidered_4() {
    document.getElementById('img_4').style.opacity="0";
}
