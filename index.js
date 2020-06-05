const server = require('./server')
const projectRoutes = require('./data/projectRoutes')

const port = 5000

server.use('/api/projects/', projectRoutes)

server.listen(port,()=>console.log('now connected ' + port))