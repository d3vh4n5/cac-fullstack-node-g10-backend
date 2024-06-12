const dotenv = require('dotenv')

dotenv.config({ path: `.env` });

const config = { 
    env: process.env.NODE_ENV ?? "dev",
    app: {
        port: process.env.PORT ?? 3000 ,
    },
    database: {
        host:  process.env.DB_HOST ?? 'localhost',
        user:  process.env.DB_HOST ?? 'root',
        password:  process.env.DB_HOST ?? '',
        name:  process.env.DB_HOST ?? 'test',
        port:  process.env.DB_HOST ?? '3306',
    }
}

module.exports = config