/*简单接口*/
interface person{
	name : string;
	age : number;
}

function printInfo(personInfo : person){
	console.log(personInfo.name);
}

let personObj = {
	name : "hsky",
	age : 24,
	height : 178,
	weight : 73,
	school : "上海大学",
};

printInfo(personObj);

interface person2{
	color : string;
	width ?: number;
}

function createSquare(config : person2) : {color:string, area : number}{
	let newSquare = {
		color : "white",
		area : 100,
	};

	if(config.color){
		newSquare.color = config.color;
	}

	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mysquare = createSquare({
	color : "black",
	width : 100
});

console.log(mysquare);


interface person3{
	readonly name : string;
	readonly age : number;
}

let per1 : person3 = {
	name : "zw",
	age : 24
};

// per1.name = "aaa";