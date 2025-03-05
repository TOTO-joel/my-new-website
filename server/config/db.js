const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://joelrung245:oNvqY8bQxdAheLCs@cluster0.77rgg.mongodb.net/firstwebsite?retryWrites=true&w=majority';

// const mongoURI = 'mongodb://127.0.0.1:27017/crud';


const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
