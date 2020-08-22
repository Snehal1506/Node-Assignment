var string = "";
function countChars(string)
{
	no_of_occ = new Map();
	string = string.toLowerCase();
	letters = Array.from(string);
	//console.log(letters);
	letters.forEach(function (value, i){
		no_of_occ.set(value, 0);
		letters.forEach(function (value1,j){
			if (value == value1){
				no_of_occ.set(value, (no_of_occ.get(value) + 1));
			}
		})
	})
	//console.log(no_of_occ);
	for(var [key, val] of no_of_occ.entries()){
		console.log(key,val);
	}
	
};

countChars('abcdefgAABB');



