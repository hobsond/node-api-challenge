const server = require('./server')
const projectRoutes = require('./data/projectRoutes')
const actionRoutes = require('./data/actionRoutes')

const port = 5000

server.use('/api/projects/', projectRoutes)
server.use('/api/actions', actionRoutes)
server.listen(port,()=>console.log('now connected ' + port))