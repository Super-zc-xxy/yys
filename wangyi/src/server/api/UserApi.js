const express = require('express');
const router = express.Router();

const DBHelper = require('../db');
const sql = require('../sqlMap');

// 增加用户
router.post('/addUser', (req, res) => {
    let sqlStr = sql.user.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.username, params.password,params.age,params.sex,params.name,params.phone,params.email,params.nameimg], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

// 查询用户
router.post('/selectUser', (req, res) => {
    let sqlStr = sql.user.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.name], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

module.exports = router;