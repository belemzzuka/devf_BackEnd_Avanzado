// MVC - Model (aquí creamos el DB Schema)

const mongoose = require('mongoose'); //inicializar mongoose

const expenseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //el tipo va a ser un Object Id de un esquema que ya existe en Mongoose
        required: true,
        ref: 'users' //referencia a el esquema que se está exportando
    },
    type: {
        type: String,
        required: [true, 'It is mandatory to add an expense type']
    },
    description: {
        type: String,
        required: [true, 'It is mandatory to add a description']
    },
    amount: {
        type: Number,
        required: [true, 'It is mandatory to add an amount']
    },
}, {
    timestamps: true, //Cuando creemos un nuevo documento, le va a agregar el timestamp (Created at y Updated at)
})

module.exports = mongoose.model('expenses', expenseSchema) //mongoose.model(<CollectionName>,<CollectionSchema>)