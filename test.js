var fuzzbuzz=function(number)
{
	for(var i=1;i<=number;i++)
	{
		var expr="";
		if(i%3==0)expr=expr+"fuzz";
		if(i%5==0)expr=expr+"buzz";
		console.log(expr || i);
	}
}
fuzzbuzz(50);

x+y=part1 all
x+z=part2 all


