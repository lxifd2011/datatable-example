var express = require('express');
var user_data = require('../db/user-data');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('default', { title:'数据表格' });
});

//router.get("/test",function(req,res,next){
//    res.send(user_data.test());
//});

router.get('/all', function (req, res, next) {
    res.send(user_data.getAll());
});
router.get("/data", function (req, res, next) {
    var index = parseInt(req.query.index);
    var count = parseInt(req.query.count);

    index = !index ? 1 : index;
    count = !count ? 5 : count;

    var result = user_data.getData(index, count);

    res.send(result);
});
router.get('/data-count', function (req, res, next) {
    var count = user_data.count();
    res.send(count + "");
});
module.exports = router;
