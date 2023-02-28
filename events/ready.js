const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('colors');

module.exports = {
    name: 'ready',
    execute(client) {
        mongoose
      .connect(process.env.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(
          `
      ╔═════════════════════════════════════════════════════╗
      ║                                                     ║
      ║       Conectado a la base de datos de MONGODB!      ║
      ║                                                     ║
      ╚═════════════════════════════════════════════════════╝`.blue
        );
      })
      .catch((err) => {
        console.log(`☁ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err);
      });

        console.log(`${client.user.tag} esta listo para usarse!` .blue)
    }
}