
//jshint esversion:6
// for evry website we have to use express-is a liabrary like jquery,
//nodemon-is for whenever we save it will automatically refresh server,
//bodyparser- it will pass the information of form (body of form)
// below 4 lines are must and then app.get,post,listen,use are must 
// and in hyper we must have to npm init bez we want package.json
const express= require("express");
const bodyParser= require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    //console.log(__dirname);//just checking is __dirname working
    //console.log("hehe")// just checking is app.get working
})

app.post("/",function(req , res){

    var BMI, height, weight,height1;
    height1 = Number(req.body.height); // number because rather it will send as a text
    height = height1/100;
    weight = Number(req.body.weight);
    BMI = weight/(height**2); 
    //console.log(BMI);//just checking is BMI calculating or not

    if(BMI < 18.5){
        res.send("Your BMI is " + BMI+ " and falls within the underweight range");    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        res.send("Your BMI is " + BMI + " and falls within the normal or healthy weight range");
    }else if((BMI > 25) && (BMI < 29.9 )){
        res.send("Your BMI is " + BMI + " and  falls within the overweight range");
    }else{
        res.send("Your BMI is " + BMI + " and  falls within the obese range");
    }
})

app.listen(3000,function(){
    console.log("listening");
})

