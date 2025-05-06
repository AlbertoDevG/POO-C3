const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(process.env.MONGODB_URI, {})
            .then(() => console.log('Base de datos conectada exitosamente.'))
            .catch(err => console.error('La base de datos presenta problemas al conectar:', err));
    }

    static obtenerConexion() {
        if (!Database.instancia) {
            Database.instancia = new Database();
        }
        return Database.instancia;
    }
}

module.exports = Database.obtenerConexion();