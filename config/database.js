const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true,  useUnifiedTopology: true  }, console.log('Connected to db!'))