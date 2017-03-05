var mongoose=require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1/201613crawl');
//定义schema 数据库的骨架模型
var MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
exports.Movie=mongoose.model('Movie',MovieSchema);
