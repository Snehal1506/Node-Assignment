exports.isPerfectNumber = function(number)
{
	var temp = 0;
	for(var i=1; i<=number/2; i++){
		if(number%i === 0){
			temp += i;
		}
	}
	if(temp === number && temp!== 0){
		return(number + " Is a perfect number");
	}else{
		return(number + " Is not a perfect number");
	}
};

