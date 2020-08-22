exports.toRoman = function(number)
{
	var romanToNum = {
		M: 1000,
		CM: 900,
		D: 500,
		CD:400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	
	var roman = "";
	if(number > 3999){
		return("The biggest number we can form in Roman numerals is 3999");
	}else {
		for(var key in romanToNum){
			//console.log(key);
			while(number >= romanToNum[key]){
				roman += key;
				number -= romanToNum[key];
			}
		}
		
		return("result : " + roman);
	}
};

