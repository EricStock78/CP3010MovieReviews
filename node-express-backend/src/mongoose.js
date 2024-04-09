import mongoose from 'mongoose';

try{
    await mongoose.connect('mongodb://localhost:27017/movie-review');
    console.log('Connected to MongoDB');
}
catch(err){
    console.log(err);
}

mongoose.connection.on('error', err => {
    console.log(err);
});

mongoose.connection.on('disconnected', err => {
    console.log(err);
});