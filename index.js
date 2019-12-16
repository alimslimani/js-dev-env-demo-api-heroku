var express =require('express');
var cors =require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users',function(req,res){
    res.json([
        {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id":2,"firstName":"Alice","lastName":"Smith","email":"alice@gmail.com"},
        {"id":2,"firstName":"Tommy","lastName":"Smith","email":"tommy@gmail.com"},
    ]);
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});