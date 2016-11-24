### 接口
1. 关键字 interface 
2. 格式 interface 名称
```javascript
	interface name(接口名称){
	}
```
3. 例子
```javascript
interface person{
	name : string;
	age : number;
	height : number;
	weight : number;
	school : string;
}
```

#### 可选属性
1. 关键:  ?:
1. 例子
```javascript
interface person2{
	name : string;
	age ?: number;
}
```
1. demo
```javascript
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
```

#### 只读属性
1. 关键 readonly
1. eg
```javascript
interface person3{
	readonly name : string;
	readonly age : number;
}
```
1. demo
