const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Go to /number for instructions")
});

app.get('/number', (req, res) => {
  res.send("Go to /number/:num to check if :num is/isn’t a palindrome")
});

function palindromeChecker(num) {
  let mod = num.toString();
  let modLite = mod.split('').reverse().join('');
  if(mod === modLite){
    return true;
  } else {
    return false;
  }
}

app.get('/number/:num', (req, res) => {
  const num = req.params.num;
  if(num < 0) {
    res.send("The number is negative");
  }
  else if(palindromeChecker(num) === false){
    res.send(`${num} isn't a palindrome`);
  }

  else if (palindromeChecker(num) === true) {
    res.send(`${num} is a palindrome`);
  } 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});