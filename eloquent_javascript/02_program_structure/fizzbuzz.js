// Kim Furuya

for (let i = 0; i <= 100; i += 1) {
  let output = '';
  if (i % 3 === 0) {
    output += 'fizz';
  }
  if (i % 5 === 0) {
    output += 'buzz';
  }
  console.log(output || i);
}
