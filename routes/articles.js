var express = require('express');
var router = express.Router();
var models =require('../models')
var Op = models.Sequelize.Op

// 用findAll查询数据库的所有信息
router.get('/', async function(req, res, next) {
  var where ={}
  var title = req.query.title;
  var content = req.query.content;
  if(title){
    where.title = {
      [Op.like]:'%'+title+'%'
    }
  }
  if(content){
    where.content = {
      [Op.like]:'%'+content+'%'
    }
  }
  var article= await models.Article.findAll({
    order: [['id','ASC']],
    where: where
  });
  res.json({article: article})
});
// 用create添加用户post方式的body传过来请求到数据库中
router.post('/', async function(req, res, next) {
  res.json({"用户发送的数据": req.body})
  var article= await models.Article.create(req.body)
  // var article= await models.Article.create({
  //   title:"文章三",
  //   content:"设计好的大家安静"
  // });
  // res.json({article: article})
});

// 用get方式的params传递id,根据主键查询数据库信息
router.get('/:id', async function(req, res, next) {
  var article= await models.Article.findByPk(req.params.id);
  res.json({article: article})
});
// 修数据库内容,根据id,使用update修改
router.put('/:id', async function(req, res, next) {
  var article= await models.Article.findByPk(req.params.id);
  article.update(req.body)
  res.json({article: article})
});
// 删除数据库根据id用delete方式,destroy函数删除
router.delete('/:id', async function(req, res, next) {
  var article= await models.Article.findByPk(req.params.id);
  article.destroy();
  res.json({msg: "删除成功"})
});

module.exports = router;
