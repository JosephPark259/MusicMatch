import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String,
});

export default mongoose.model('cards',cardSchema);

// WITH NO SQL collection > [documents] > collection > [documents] ...