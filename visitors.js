const Pool = require("pg").Pool;
const pool = new Pool({
  user: "node",
  host: "localhost",
  database: "db",
  password: "pass2",
  port: 5432
});

pool.connect(function(err) {
  if (err) console.log(err + "Ooops");
  else console.log("SERVER CONNECTED!");
});

const addNewVisitor = (data) =>{
    pool.query(`INSERT INTO Visitors(name, age, date, time, assistor, comments) VALUES ($1, $2, $3, $4, $5, $6)`,
    [data.name, data.age, data.date, data.time, data.assistor, data.comments],
    (error, respond) => {
        console.log(error, respond);
    });
}

const listAllVisitors = () => {
    pool.query( "SELECT DISTINCT ID, Name FROM Visitors", (error, respond) => {
        console.log(error, respond);
    });
}

const deleteVisitor = (id) => {
    pool.query( `DELETE FROM Visitors WHERE id = ${id}`, (error, respond) => {
        console.log(error, respond);
    });
}


const viewVisitor = (id) => {
    pool.query(`SELECT * FROM Visitors WHERE id = ${id}`, (error, respond) => {
        console.log(error, respond);
      });
}

const deleteAllVisitors = () => {
    pool.query('DELETE FROM Visitors ', (error, respond) => {
      console.log(error, respond);
    });
  };



// addNewVisitor({
//     name: 'Kenneth',
//     age: 26,
//     date: '2019-05-20',
//     time: '12:00:00',
//     assistor: 'Tebogo',
//     comments: 'Application done'
// });