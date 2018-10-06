//初次使用
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db1');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
