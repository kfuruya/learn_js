// Kim Furuya

console.log('hello world');

for (let lineNum = 0; lineNum < 7; lineNum += 1) {
  let counter = lineNum;
  let output = '';
  for (counter; counter > 0; counter -= 1) {
    output += '#';
  }
  console.log(output);
}


// actual elegant solution
for (let line = '#'; line.length < 7; line += '#') {
  console.log(line);
}
