import { config } from './config'
import mongoose from 'mongoose'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import corsConfing from './config/cors'
import path from 'path'

import router from './routes';

//  app
const app = express();
//middleware muestra las peticiones en consola
app.use(morgan('dev'))

app.use(cors(corsConfing))
//recibir datos json de un formulario
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

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

//routes
app.get("/user", function(req, res){
    res.send("Hello user")
})
app.use("/api", router)



//  server
app.listen(config.port, function () {
    console.log(`Server listen in port ${config.port} 🚀`);
});