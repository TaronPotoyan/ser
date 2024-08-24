const exp = require('express');
const app = exp();
const port = 8080;

app.get('/' , function (req,res){
    console.log("asd");
	res.send("Hello World");
    	
});
app.listen(port,function (){
	console.log('app is listening');
});
