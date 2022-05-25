let picWidth = 967;
// 문자 + 숫자 => 연결연산자
for(var i=0; i<5; i++) {
    document.getElementById("pic" + i).style.left = (1440 * i) + "px";
}

let moveNum = 0; // 버튼을 눌렀을 때 1씩 증가하기 위해서 초기값을 0으로 설정


document.getElementById("prev_btn").onclick = function(){
    if(moveNum > 0){
        moveNum--;
    }
    for(var i = 0; i<5; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)+"px");
    }
}

document.getElementById("next_btn").onclick = function() {
     if(moveNum < 4) {
        moveNum++;
    }
     for(var i=0; i<5; i++) {
        document.getElementById("pic" + i).style.left = (picWidth * (i - moveNum)) + "px";
    }
}