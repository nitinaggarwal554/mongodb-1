var mongoose=require('mongoose');

var options={
    user:'myTester',
    pass:'xyz123'
}
mongoose.connect('mongodb://localhost:27017/ecommercedb',{useNewUrlParser:true},options);

var db=mongoose.connection;

db.on('open',function(){
    console.log('we are connected!!')
})

db.on('error',function(){
    console.log('There is some error');
})

db.close();