var a;
var b;

var c;
var d;
var e;


a=3;
b='c';
c="Hello, World";
d=4.2;

a='c';
// 타입에 전혀 구애받지 않음. 그냥 var로 선언하면 끝. 

/*
if(asfdasf)
{

}
*/

if(a==3)
{
	;
}

// =가 3개인 경우가 있음
// ==는 얕은 검사
// ===는 깊은 검사 - object의 구조 등 까지 모두 같아야 ture

for(var i=0; i<10; i++)
{

}

var person = {fname:"john", age:25}; // structure같은 느낌
var x;
for (x in person)
{

}
//person이라는 것 안에 있는 모든 것

// var 등 모든 것이 하나 하나 객체임
// 함수도 객체이기 때문에 데이터랑 차이가 없게 넘길 수 있음

/*
 function (인자){
	내용
}
이건 무명함수

function 이름 (인자){
	내용
}
이렇게 이름 넣을 수 있음

저장하려면

var 이름 = function (인자){
	내용
}
*/

console.log("Hello, World");
alert("asdf");
//  alert 알림창 띄우기
var num = prompt("별의 갯수를 입력하세요.", 5);
// prompt(내용, 기본값);
// 기본값은 안써도 됨
// 입력받은 값을 리턴하는 prompt가 입력받은 값을 num에 저장함