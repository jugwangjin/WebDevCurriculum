
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
