import { config } from './config'
import mongoose from 'mongoose'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import corsConfing from './config/cors'

//  app
const app = express();
//middleware muestra las peticiones en consola
app.use(morgan('dev'))

app.use(cors(corsConfing))
//recibir datos json de un formulario
app.use(express.json())

//connecting to db
mongoose.connect(config.database_url, { useNewUrlParser: true })
    .then(
        () => {
            console.log('Database connected')
        },
        err => {
            console.error(err)
        }
    )


//  server
app.listen(config.port, function () {
    console.log(`Server listen in port ${config.port} 🚀`);
});