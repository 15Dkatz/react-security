let user, host, database, password;

if (process.env.MODE === 'production') {
  user = 'dbwbapmsdoowtw';
  host = 'ec2-23-23-247-222.compute-1.amazonaws.com';
  database = 'd6k1oq1ia248qd';
  // password = '9ee8f394c7fcaea7b9b803d15f3fab969abccd75356e4691e9159d447132ca02';
  password = process.env.DB_PASSWORD;
} else {
  user = 'node_user';
  host = 'localhost';
  database = 'usersdb';
  password = 'node_password';
};

module.exports = { user, host, database, password, port: 5432 };
