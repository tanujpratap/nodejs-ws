const express=require('express');
const path=require('path');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
contactlist=[
    {
        'name':'tanuj pratap',
        'phone':'7983185913'
    }
    ,{
        'name':'rishabh',
        'phone':'8445089471'
    }
    ,{
        'name':'lokesh',
        'phone':'7248585248'

    }
]
app.get('/',function(req,res){
    console.log(req);
    // console.log(__dirname);
    // res.send("<h1>cool it is running or is it?</h1>")
    return res.render('home',{title:"contactlist",contact_list:contactlist});
});
app.get('/practice',function(req,res){
    return res.render('practice',{title:'let us play with ejs'}
    );
});
app.post('/createcontact',function(req,res){
//  return res.redirect('/practice');
//  console.log(req.body);
//  console.log(req.body.my_name);
//  console.log(req.body.my_phone);
contactlist.push(
    {
        name:req.body.my_name,
        phone:req.body.my_phone

    }
);
// contactlist.push(req.body);
 return res.redirect('/');
// return res.redirect('back');
});
app.listen(port,function(err){
if(err){
    console.log("server is not running due to error",err);
}
console.log("yup my server is running at port",port);
})