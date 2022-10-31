
import mongoose from "mongoose";


class Mongodb {

    constructor() {
        this.connect = mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        this.connection = mongoose.connection;

        // when successfully connected
        mongoose.connection.on('connected', () => {
            console.log('Mongodb successfully connected');
        });
        // if the connection throws an error
        mongoose.connection.on("error", (err) => {
            //   if you get error for the first time when this gets started make sure to run mongodb
            console.log('Mongodb connection failed', err);
        });
        // when the connection is disconnected
        mongoose.connection.on("disconnected", () => {
            console.log('Mongodb connection disconnected');
        });
    }


}

module.exports = Mongodb;