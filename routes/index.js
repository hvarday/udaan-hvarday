var express = require('express');
var router = express.Router(),
    rp = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/news', (req, res, next)=>{
    
    rp.get("https://newsapi.org/v2/top-headlines?apiKey=cd1db87dec794c2288c915ba6abeee94&country=in")
    .then((data)=>{
        res.json(data);
    })
    .catch(next);

})

module.exports = router;
