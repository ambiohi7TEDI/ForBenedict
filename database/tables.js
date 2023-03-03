module.exports = [
    {
        "name": "contacts",
        "sql": `CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER(16) AUTO_INCREMENT NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            phone VARCHAR(20) NOT NULL
        )`
    }
]