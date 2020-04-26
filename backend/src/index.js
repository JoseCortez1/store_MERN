const app = require('./app')
require('./database')


main = async()=>{
    await app.listen(app.get('port'))
    console.log('Server is on port: ', app.get('port'))
}