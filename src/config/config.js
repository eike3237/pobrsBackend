module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: DBPobrs,
            dialect: 'mysql',
            user: 'root',
            password: 'Eike32374847@'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
