let myNum = 1; // 현재 이미지 위치인 myNum의 값은 바뀌어야하니까 let으로 선언
const totalNum = 4; // 전체 이미지 개수인 totalNum의 값은 바뀌면 안 되니까 const로 선언

// let curPos = 0;
let position = 0;
const ImgWidth = 1200;
const btnPrev = document.getElementById("btn_prev");
const btnNext = document.getElementById("btn_next");
const bannerImg = document.getElementsByClassName("banner");

// 화면에 숫자를 입력해주기 위해 numberSetting 함수 선언
function numberSetting() {
    document.getElementById("num").innerText = myNum; // html의 num에 myNum 텍스트 추가
    document.getElementById("total").innerText = totalNum;
}
numberSetting(); // 함수 호출


// btn_prev(이전 버튼) 클릭시 함수 실행
btnPrev.onclick = function () {
    console.log("이전버튼");

    
        // 첫번째 이미지에서 이전 버튼을 누르면 마지막 이미지가 나오도록 하기 위해 조건문 사용
        if (myNum == 1) { // myNum이 1이면
            myNum = totalNum; // myNum 값을 totalNum으로 변경
        }
        else { // myNum의 값이 1이 아닐 경우
            position -= ImgWidth
            document.getElementById("banner").style.right = position + "px";
            myNum--; // 1씩 감소
        }

    numberSetting(); // numberSetting 함수 호출
};


// btn_next(다음 버튼) 클릭시 함수 실행
btnNext.onclick = function () {
    console.log("다음버튼");
        // 마지막 이미지에서 다음 버튼을 누르면 첫번째 이미지가 나오도록 하기 위해 조건문 사용
        if (myNum == totalNum) { // myNum이 totalNum 값과 같으면
            myNum = 1; // myNum 값을 1로 변경
            // document.getElementById("banner").style.left = "0px";
        }
        else { // myNum이 totalNum 값과 같지 않다면
            position += ImgWidth
            document.getElementById("banner").style.right = position + "px";
            myNum++; // 1씩 증가        
        }
    numberSetting(); // numberSetting 함수 호출

    console.log(document.getElementById("banner"));

    // pic(롤링배너 이미지)에 스타일값 적용
    // document.getElementById("pic").style.border = "3px solid blue";
    // document.getElementById("banner").style.right = "1200px";

    // function init() {
    //     btnPrev.setAttribute('disabled', 'true');
    //     btnPrev.addEventListener("click", prev);
    //     btnNext.addEventListener("click", next);
    // }

    // init();
}