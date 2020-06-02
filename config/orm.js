
const con = require('./connection.js');
let mysql = require('mysql');

module.exports = {
  getAll(table, cb) {
    con.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  getAllWhere(table, where, cb) {
    con.query(`SELECT * FROM ${table} WHERE ?`, where, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  createOne(table, data, cb) {
    con.query(`INSERT INTO ${table} SET ?`, data, (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },
  updateOne(table, changes, where, cb) {
    con.query(`UPDATE ${table} SET ? WHERE ?`, [changes, where], (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },
  deleteOne(table, where, cb) {
    con.query(`DELETE FROM ${table} WHERE ?`, where, (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  }
}