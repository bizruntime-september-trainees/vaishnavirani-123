function getItems(items) {
    return new Array().concat(items);
}
var arrNumber = getItems([10, 20, 30]);
var arrString = getItems(["Hello", "reena "]);
arrNumber.push(40);
arrNumber.push(50);
arrNumber.push(60);
arrString.push("Hello TypeScript");
arrString.push("priya");
arrString.push("sonam");
console.log(arrNumber);
console.log(arrString);
