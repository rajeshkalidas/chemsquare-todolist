const express = require('express');
const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var database_instance = new sqlite3.Database('./database/add_remove_todo_query.db');

/**
 * create table and check if already exists
 */
database_instance.serialize(() => {
    database_instance.run("CREATE TABLE if not exists chemtodotable (todoName TEXT)");  
});

var cors = require("cors")
const expressServer = express();
const port = process.env.PORT || 8080;

expressServer.use(bodyParser.json()); 
expressServer.use(bodyParser.urlencoded({ extended: true }));

//Added CORS
expressServer.use(cors());
expressServer.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Performing save operation
 */
expressServer.post('/saveTodo', (req,res) => {
    let addtodo = req.body.addtodo;
    var data_insert = database_instance.prepare("INSERT INTO chemtodotable VALUES (?)");
    data_insert.run(addtodo);
    data_insert.finalize(); 
    res.status(200).send(JSON.stringify("Data has been saved successfully...!"));
})

/**
 * Performing get operation
 */
expressServer.get('/getTodo', (req,res)  => {
    database_instance.all("SELECT rowid AS id, todoName FROM chemtodotable", function(err, dataRows) {
        if(err) {
            res.status(200).send(JSON.stringify(err));
        }
        let obj = {
          result: dataRows,
          message:"Data has been retrieved successfully...!"
        }
        res.status(200).send(JSON.stringify(obj));
    }); 
})


/**
 * Performing delete operation
 */
expressServer.get('/deleteTodo', (req,res)  => {
    let rowID =  req.query.rowId;
    database_instance.run("DELETE FROM chemtodotable WHERE rowid=(?)", rowID, function(err) {
      if(err){
        res.status(200).send(JSON.stringify(err));
      }
      else{
        let data = {
          message:"Todo deleted successfully..!"
        }
        res.status(200).send(JSON.stringify("Data has been deleted successfully"));
      }
    });
  })


/**
 * Listening to server
 */
expressServer.listen(port, () => {
    console.log(`Listening to server on port ${port}`)
});