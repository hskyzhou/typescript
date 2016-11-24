function printInfo(personInfo) {
    console.log(personInfo.name);
}
var personObj = {
    name: "hsky",
    age: 24,
    height: 178,
    weight: 73,
    school: "上海大学",
};
printInfo(personObj);
function createSquare(config) {
    var newSquare = {
        color: "white",
        area: 100,
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mysquare = createSquare({
    color: "black",
    width: 100
});
console.log(mysquare);
var per1 = {
    name: "zw",
    age: 24
};
// per1.name = "aaa"; 
//# sourceMappingURL=interface.js.map