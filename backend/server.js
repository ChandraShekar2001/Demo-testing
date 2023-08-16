const app = require('./app');
const connectDatabase = require('./database/connectDatabase');

connectDatabase();
const PORT = 2000;

const server  = app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1);
    })
})

