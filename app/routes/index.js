var request = require('request')
  , youtube = require('youtube-search');

exports.index = function(req, res){
  res.render('index', { title: 'Cooper Union Youtube Proxy' });
};

exports.json = function(req, res, next) {
  res.set({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  next();
};

exports.youtube_search = function(req, res) {
  var opts = {
    maxResults: 15,
    startIndex: 1
  };

  youtube(req.params.query, opts, function(err, results) {
    res.end(JSON.stringify(results));
  });
};
