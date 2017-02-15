function getuniquenumber(string){
	var temObject={};
	for(var i=o; i<string.length; i++){
		if(temObject[string[i]]) === undefind{
			temObject[string[i]] =1;
		}
		else{
			temObject[string[i]] +=1;
		}
	}
	var finalstring =""
	for (var key in (temObject)){
		if(temObject[key] === 1){
			finalstring += key
		}
	}
	return finalstring
}
console.log(getuniquenumber("Hallo"));