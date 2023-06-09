const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM students", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.get("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM students WHERE id = ?", [req.params.id],(err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO students set ?",[req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send('Student Added')
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("DELETE FROM students WHERE id = ?",[req.params.id], (err, rows) => {
      if (err) return res.send(err);

      res.send('Student Deleted')
    });
  });
});


routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("UPDATE students SET ? WHERE id = ?",[req.body,req.params.id], (err, rows) => {
      if (err) return res.send(err);

      res.send('Student Updated')
    });
  });
});
module.exports = routes;
