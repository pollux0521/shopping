const path      = require('path');
const rootPath  = path.join(__dirname, "../");
const srcPath   = path.join(rootPath, "src/");
const express   = require('express');
const router    = express.Router();
const conn      = require('../module/database');

router.get("/", (req, res)=>{
    res.sendFile(srcPath + "index.html", (err)=>{
        if(err){
            console.log(err);
            res.end();
        }
    });
});

router.get("/addUser", (req,res)=>{
    var sql = 'INSERT INTO users(_id, _pw, _name, _email)VALUES(?,?,?,?)';
    var params = ["user1", "user1", "user1", "user1@example.com"];
    conn.query(sql, params, (err, row, fields)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            console.log("success");
            res.end();
        }
    })
})

module.exports = router;