import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import router from './routes/index'
import chalk from 'chalk'
import swaggerJSDoc from 'swagger-jsdoc'
import core from './core/index'
import session from 'express-session';

const config = require('config-lite')(__dirname)
const app = express()

var swaggerDefinition = {
  info: {
    title: '新框架API',
    version: '1.0.1',
    description: "[接口地址](http://localhost:3000/api-doc/index.html)",
  },
  host: 'localhost:3000',
  basePath: '/'
}

var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/admin/*.js', './routes/business/*.js']
}

var swaggerSpec = swaggerJSDoc(options);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') res.send(200)
  else next()
})

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*5
  }
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
})
app.use('/api-doc', express.static('public/swagger'))
app.use('/generatecode', express.static('public/generate'))

app.use(core.auth);

router(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);

  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send({err})
})

app.listen(config.port, () => {
  console.log(chalk.green('成功监听端口' + config.port))
})
