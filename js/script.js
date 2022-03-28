$(document).ready(function(){
    //우상단의 "x" 버튼만 클릭시, 쿠키 설정은 없음. 브라우저 새로고침시 다시 열림
    $("#dark, #popup .close").click(function(){
        $("#popup").removeClass("active");
        $("#dark").removeClass("active");
    });
});

//쿠키 설정하기
function setCookie( name, value, expirehours ) {  
    var todayDate = new Date(); 
    todayDate.setHours( todayDate.getHours() + expirehours );   //시간 단위로 제한시간을 현재 시간으로부터 몇시간을 설정할지를 결정
    document.cookie = name + "=" +escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
    //문서의 쿠키 설정이 쿠키 설정 Key과 16진수에 의한 쿠키 설정 value 값과 동일하고 경로 설정이 현재 위치이며, 설정된 제한 시간이 쿠키 설정 시간과 동일한 값으로 설정 
    //escape() 함수는 알파벳과 숫자 및 * , @, - , _ , + , . , / 를 제외한 문자를 모두 16진수 문자로 바꾸어 준자. 이 함수는 쉼표와 세미콜론 같은 문자가 쿠키문자열과의 충돌을 피하기 위해 사용됨.
    //toGMTString() : 표준시(GMT)를 사용하여 문자열로 변환된 일자를 반환
}
 
//"오늘 하루동안 열지않기" 버튼 클릭시
function todayclosePop() { 
    setCookie( "ncookie","done",24);  //쿠키 설정 Key, 쿠키 설정 Value, 쿠키 설정 시간 
    document.getElementById('popup').setAttribute("class", "");  //비활성화
    document.getElementById('dark').setAttribute("class", "");  //비활성화
}

// 화면인 열리면서 브라우저 내의 쿠키의 상태를 체크
cookiedata = document.cookie; 
if ( cookiedata.indexOf("ncookie=done") < 0 ){ //"오늘 하루동안 열지않기" 버튼 클릭 전. 현재 쿠키의 값이 존재한다면 인덱스 번호를 반환(최소 0), 없다면 -1을 반환
    document.getElementById('popup').setAttribute("class", "active");  //활성화
    document.getElementById('dark').setAttribute("class", "active");  //활성화
}else{ ////"오늘 하루동안 열지않기" 버튼 클릭시
    document.getElementById('popup').setAttribute("class", "");  //비활성화
    document.getElementById('dark').setAttribute("class", "");  //비활성화
}