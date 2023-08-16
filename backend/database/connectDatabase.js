const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect('mongodb+srv://pvchandu07:pvpassword@cluster0.ge17k9a.mongodb.net/users', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    })
}

module.exports = connectDatabase;