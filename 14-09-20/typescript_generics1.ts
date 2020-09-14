function getItems<T>(items : T[] ) : T[] {  
    return new Array<T>().concat(items);  
}  
let arrNumber = getItems<number>([10, 20, 30]);  
let arrString = getItems<string>(["Hello", "reena "]);  
arrNumber.push(40); 
arrNumber.push(50);
arrNumber.push(60);
arrString.push("Hello TypeScript"); 
arrString.push("priya"); 
arrString.push("sonam");
console.log(arrNumber);  
console.log(arrString);  
