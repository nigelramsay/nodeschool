// console.log(process.argv);

var subset = process.argv.slice(2);
var sum = 0;
subset.forEach(function(num) {
  x = Number(num);
  sum = sum + x;
});

console.log(sum);