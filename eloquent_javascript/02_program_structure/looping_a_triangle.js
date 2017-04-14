// Kim Furuya

console.log("hello world");

for (var lineNum = 0; lineNum < 7; lineNum ++) {
    var counter = lineNum;
    var output = "";
    for (counter; counter > 0; counter--) {
    output += "#";
    }
    console.log(output);
}


// actual elegant solution
for (var line = "#"; line.length < 7; line += "#") {
    console.log(line)
}
