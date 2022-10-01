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
    message: getResult(req.body.userText)
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
  } function removeP(phrase){
    for(let i = 0; i < phrase; i++){
      pChecker(phrase).replace(/;|'|"|:|!|./g, "");
    }
    return true;
  }
}

function getResult(phrase){
  if (pChecker(phrase)){
    return `${phrase} is a palindrome`
  }
  return `${phrase} is not a palindrome`
}

