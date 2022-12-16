const express = require('express');
const toDoRouter = express.Router();
const pool = require('../modules/pool.js');


//GET ROUTE//
toDoRouter.get('/', (req, res) => {
  let sqlQuery = `
    SELECT * FROM "toDos" 
    ORDER BY "id";
  `;
  pool.query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error', dbErr);
      res.sendStatus(500);
    });
});


//POST ROUTE//
toDoRouter.post('/',  (req, res) => {
  let newItem = req.body;
  console.log(newItem);

  let sqlQuery = `
    INSERT INTO "toDos" 
    ("toDoItem", "status")
    VALUES ($1, $2);
  `;
  let sqlValues = [newItem.toDoItem, newItem.status];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.sendStatus(500);
    });
});



//PUT ROUTE//
toDoRouter.put('/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let doneStatus = req.body.status;

  let sqlQuery = `
    UPDATE "toDos"
	    SET "status"=$1
	    WHERE "id"=$2;
  ` 
  let sqlValues = [doneStatus, idToUpdate];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.sendStatus(500);
    })
})


//DELETE ROUTE//




module.exports = toDoRouter;