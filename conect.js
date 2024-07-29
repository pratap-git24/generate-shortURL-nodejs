const mongoose = require('mongoose')

async function connetToMongoDB(url){
    return mongoose.connect(url)
}

module.exports = {
    connetToMongoDB,
};