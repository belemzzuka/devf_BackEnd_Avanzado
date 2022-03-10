const mongoose = require('mongoose');
require('dotenv').config();

async function main(){
    await mongoose.connect(process.env.MONGO_URI)
}

function createMessage() {
    // crear una entidad en la base de datos
    const messageSchema = new mongoose.Schema({
        content: String,
        sender: String,
        read: Boolean
    });

    messageSchema.methods.send = function send() {
        console.log(`El mensaje "${this.content}" fue enviado.`);
    }

    const Message = mongoose.model('Message', messageSchema) // el modelo recibe el esquema del mensaje

    const message = new Message({ // iniciamos una entidad con ese modelo con los valores que queremos que tenga
        content: 'Este es el primer mensaje',
        sender: 'Misael Calvillo',
        read: false
     })

     return message.save(); //mandarlo a la base de datos de mongo. Save es una promesa de mongoose
}

main()
.then(() => {
    console.log('La conexión es exitosa')
    createMessage()
    .then((message) => message.send())
    .catch(err => console.log(err));
})
.catch((err) => {
    console.log(err)
});