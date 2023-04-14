const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = 22010

var connection
function dbconn(){
	connection = mysql.createConnection({
      host: '192.168.0.200',
      user: 'u56_3h4CuloW2W',
      password: 'tbLGz4=Qc9co.BsIFBEe6e^O',
      database: 's56_db'
    })
    connection.connect()
}

app.use(cors())

app.use(express.static('kepek'))

app.use(express.json())


app.get('/', (req, res) => {

  res.send('Hello World!')
})


app.get('/cica', (req, res) => {
    dbconn()
    
    connection.query('SELECT * from cica', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

  })
  app.post('/uzenet', (req, res) => {
	dbconn()
       
    connection.query('INSERT into uzenetek values (NULL, '+req.body.bevitel1, ',"'+req.body.bevitel2+'" , "'+req.body.bevitel3+'",now()  )', function (err, rows, fields) {
      if (err) 
        console.log( err)
      else{
      console.log('Sikeres felvitel!')
      res.send(rows)}
      
    })
    
    connection.end()

  })
app.post('/felvitel', (req, res) => {
    dbconn()
    
    connection.query("INSERT into cica values (NULL,'"+req.body.bevitel1+"','1.png','2022-03-11')", function (err, rows, fields) {
      if (err)   
      console.log(err)
	else
      res.send('Sikeres felvitel!')
    })
    
    connection.end()

  })
app.post('/uzenet', (req, res) => {
    dbconn()
    
    connection.query("INSERT into  values (NULL,'"+req.body.bevitel1+"','1.png','2022-03-11')", function (err, rows, fields) {
      if (err)   
      console.log(err)
	else
      res.send('Sikeres felvitel!')
    })
    
    connection.end()

  })
 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})