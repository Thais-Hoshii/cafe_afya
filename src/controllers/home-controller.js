module.exports = {
  index: function(req, res, next) {
    res.render('home/index');
  },
  sobre: function(req, res, next) {
    res.render('home/sobre');
  },
  produtos: function(req, res, next) {
    res.render('home/produtos');
  },
  loja: function(req, res, next) {
    res.render('home/loja');
  }
};