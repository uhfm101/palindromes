var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: ""
  });
});

router.post('/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: other(req.body.userText),
  })
})

module.exports = router;

function pChecker(phrase) {
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  if (phrase.toLowerCase().replace(" ", "") === temp.toLowerCase().replace(" ", "")) {
    return true;
} else{
    return false;
  }
}

function getResult(phrase){
  if (pChecker(phrase)){
    return `${phrase} is a palindrome`
  }
  return `${phrase} is not a palindrome`
}

function other(phrase){
  let reverse = phrase.split("");
  reverse = reverse.reverse()
  reverse = reverse.join("")
  if(pChecker(phrase)){
    return `${reverse}`
  }
  return `${reverse}`
}













function removeP(phrase){
  for(let i = 0; i < phrase; i++){

  }
}