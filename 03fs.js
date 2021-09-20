const fs = require('fs')

//const data = fs.readFileSync('./Conf.js')
//console.log('data',data)


fs.readFile('./Conf.js' , (err,data) => {
    if (err) throw err;
    console.log(data.toString())

})

