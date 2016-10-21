
var makespace = function(num, i){
	var temp=' ';
	for(var a=1; a<=(num-i); a++)
	{
		temp=temp+' ';
	}
	return temp;
}
var makestars = function (i)
{
	var stemp='*';
	for(var j=1; j<=(2*i-2); j++)
	{
		stemp=stemp+'*';
	}
	return stemp;
}

var printstars = function (num)
{
	for(var i=1; i<=num; i++)
	{
	var space=makespace(num, i);
	var stars=makestars(i);
	var print=space+stars+space;
	console.log(print);
	}
}


printstars(prompt("별의 갯수를 입력하세요", 5));



/*

더좋은 예제

var printStar = function(n) {
   for(var i=0; i<n; i++) {
      var string = "";
      for(var j=0; j<2*n+1; j++) {
         
         if(n - i - 1 < j && j < n + i + 1)
            string += "*";
         else
            string += " ";
      }
      console.log(string);
   }
}

var num = prompt("별의 갯수를 입력하세요.", 5);
printStar(parseInt(num));
*/

