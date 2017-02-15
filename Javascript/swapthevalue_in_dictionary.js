arry1=[
  {name="leo"
   pet_id:1
  }
   {name="yang"
   pet_id:2
  }
   {name="hao"
   pet_id:3
  }
   {name="haocheng"
   pet_id:4
  }
]
arry2=[
 {
   id:1
   type="Dog"
  }
   {
   id:2
   type="cat"
  }
   {
   id:3
   type="fish"
  }
  {
   id:4
   type="bird"
  }
]

function joinByPetId(arr1, arr2){
	var result =[];
	for(var i=0; i<arr.length; i++){
		var object={}
		object.name=arr[i].name
		for(var j=o; j<arr2.length; j++){
		if(arr[i].pet.id == arr2[j].id){
		   object.pet = arry2[j].type;
		   break
			}
		}
	  } result.push(object);
	}return result;
  }
  
  joinByPetId(array1, array2)