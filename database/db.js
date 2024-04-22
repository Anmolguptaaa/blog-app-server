import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-nj94bfr-shard-00-00.guasmpg.mongodb.net:27017,ac-nj94bfr-shard-00-01.guasmpg.mongodb.net:27017,ac-nj94bfr-shard-00-02.guasmpg.mongodb.net:27017/?ssl=true&replicaSet=atlas-i7ialo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog-app`;
    try{ 
    await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;