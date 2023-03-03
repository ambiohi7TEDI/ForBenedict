require('dotenv').config()
const mysql = require('mysql');

// Some of the functions here are broken but they still work...

const tables = require('./tables')

const connObj = {
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "port": process.env.DB_PORT
}

const con = (props) => {
    const conn = mysql.createConnection(props)
    return conn
}

const printError = (error) => {
    console.error(`An error occured.\nERROR: ${error.message}`);
}

const createDatabase = async (conn, name) => {
    const sql = `CREATE DATABASE IF NOT EXISTS ${name}`

    new Promise((resolve, reject) => {
        conn.query(sql, err => {
            if (err) {
                console.error(err.message);
                reject()
            }
            console.log(`Databse '${name}' created.`)
            resolve()
        })
    })
}

const createTables = async (conn) => {
    try {
        await new Promise((resolve, reject) => {
            tables.forEach(table => {
                conn.query(table.sql, (err) => {
                    if (err) {
                        throw err
                        return
                    }
                    console.log(`Table ${table.name} was created successfully.`);
                })
            });
            resolve()
        })
        .catch(err => {
            printError(err)
        })
    } catch(err) {
        console.log(`Table was not created.`);
        printError(err)
        return false
    }
    return true
}

const readyDatabase = async () => {
    const conn = con(connObj)
    try {
        new Promise((resolve, reject) => {
            conn.connect((err) => {
                if (err) {
                    console.error(`Database authentication failed.\nERROR: ${err.message}`);
                    reject(err)
                }
                console.log('Database authenticated successfully.');
                createDatabase(conn, process.env.DB_NAME).then(() => {
                    resolve()
                })
                .catch((err) => {
                    printError(err)
                })
            })
        })
    } catch (error) {
        printError(error)
        return false
    }
    return true

}

const connect = () => {
    const conn = con({...connObj, database: process.env.DB_NAME})
    return conn
    return null
}

module.exports = {
    base: con,
    connect,
    refreshDatabase: readyDatabase,
    createTables
}