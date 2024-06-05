const {readFileSync,writeFileSync}=require("fs")
const first=readFileSync("./content/first.txt","utf-8");
const second=readFileSync("./content/second.txt","utf-8");
// console.log(first)
// console.log(second)

writeFileSync("./content/result.txt",`here is the first and second values : ${first},${second} `, {flag:'a'})
//if we want to append the any variable to the file created we can do it simply by using the parameter