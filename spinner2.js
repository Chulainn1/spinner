let time = 100;
let lines = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const spinner = function(linesArr, delay) {
  for (let i = 0; i < linesArr.length; i++) {
    setTimeout(function() {
  
      process.stdout.write("\r" + linesArr[i]+ "   ");
      
    }, delay);
    delay += 200;
  }
};

spinner(lines, time);