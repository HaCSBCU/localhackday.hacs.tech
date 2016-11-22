var express = require('express')
var app = express()
var port = process.env.PORT || 3000
const dir = __dirname + '/'

app.use('/assets', express.static(dir + 'assets'))
app.use('/images', express.static(dir + 'images'))
app.get('/*',function(req,res){

     res.sendFile(dir + 'index.html');

});

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})
