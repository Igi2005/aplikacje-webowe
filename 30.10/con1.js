const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "baza_node"       
});

module.exports=connection