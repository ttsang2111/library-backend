'use strict';
const mongoose = require('mongoose');

const countConnection = () => {
    const numConnections = mongoose.connections.length;
    console.log(`Number of connections of mongodb:::${numConnections}`);
}

const checkOverload = () => {

}

module.exports = {
    countConnection,
    checkOverload
}