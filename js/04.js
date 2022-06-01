// 초기 변수 선언
const picWidth = 966;
let moveNum = 0;
const totalNum = 4;


// 이미지 위치 셋팅
for(var i=0; i<totalNum; i++) {
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text" + moveNum).classList.add("active"); // active 클래스 추가

// 동적으로 점 인디게이터 생성 - ul, li
let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("section1").appendChild(dotList);

// li 반복문으로 생성
for(var i=0; i<totalNum; i++) {
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).innerText = i;
    document.getElementById("li" + i).onclick = function() {
    aniFunction();
    moveNum = this.id.substr(2,1);
    moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active"); // 선택된 인디게이터에 색상 추가

// 좌우 버튼 셋팅 prev_btn, next_btn
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "prev";
document.getElementById("imgSet").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "next";
document.getElementById("imgSet").appendChild(next_btn);


// 이미지 움직임 함수 선언
var moveFunction = function() {
    for(var i=0; i<totalNum; i++) {
        document.getElementById("pic" + i).style.left = (picWidth * (i - moveNum)) + "px";
    }
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");

    // 인디게이터 활성화 색 추가 (버튼 넘길 때마다 색 바뀌도록)
    for(var i=0; i<totalNum; i++) {
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}
// 설명글 움직임 함수 선언 (기존 설명글이 사라지도록)
var aniFunction = function() {
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
}


// 좌우 버튼 제어
document.getElementById("prev_btn").onclick = function() {
    aniFunction();
    if(moveNum > 0) {
        moveNum--; // 버튼을 한 번 누르면 moveNum을 1씩 감소
    }
    moveFunction(); // 중복되는 부분 함수로 만들어서 호출
}
document.getElementById("next_btn").onclick = function() {
    aniFunction();
    if(moveNum < (totalNum-1)) {
        moveNum++; // 버튼을 한 번 누르면 moveNum을 1씩 증가 (for문에 쓰면 여러 번 반복되기 때문에 안 됨)
    }
    moveFunction();
}