const mongoose = require('mongoose')


mongoose
    .connect(`mongodb+srv://IMBB:brinbergben@cluster0-zxnkf.mongodb.net/gdud21`, 
    { useNewUrlParser: true,
        useUnifiedTopology: true})

    .catch(e => {
        console.error('Connection error',
         e.message)
    })

const db = mongoose.connection 

module.exports = db