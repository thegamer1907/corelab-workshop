var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/banking', { useNewUrlParser: true }).then((msg) => {
    console.log("DB Connected");
}).catch((err) => {
    console.log("DB not Connected");
    console.log(err);
});
mongoose.set('useCreateIndex', true);


module.exports = {
    mongoose : mongoose
}