'use strict';

const mongoose = require('mongoose');

const DATABASE_URI = 'mongodb://localhost:27017/library/v1';

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(DATABASE_URI).then(_ => console.log("Connected Mongodb Successfully."))
            .catch(err => console.log(`Failed to connect to Mongodb! Error: ${err}`));
    }

    static getInstance() {
        // dev
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }

        if (!Database.instance) {
           Database.instance = new Database(); 
        }
        return Database.instance;
    }
}


const instanceDb = Database.getInstance();
exports.module = instanceDb;