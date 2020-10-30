const profileTable = `CREATE TABLE IF NOT EXISTS PROFILE(
  profileid SERIAL PRIMARY KEY,
  fname VARCHAR(25) NOT NULL,
  lname VARCHAR(25) NOT NULL,
  description TEXT NOT NULL,
  email VARCHAR(30) NOT NULL,
  workplace VARCHAR(40),
  location VARCHAR(30),
  title VARCHAR(20) NOT NULL,
  github VARCHAR(30) NOT NULL,
  linkedin VARCHAR(30) NOT NULL
);`;

const authenticationTable = `CREATE TABLE IF NOT EXISTS AUTH (
  userid VARCHAR(28) PRIMARY KEY,
  profileid INT REFERENCES PROFILE(profileid)
);
`;

const domainTable = `CREATE TABLE IF NOT EXISTS DOMAIN(
  domain VARCHAR(30) PRIMARY KEY,
  expertice VARCHAR(25),
  profileid INT REFERENCES PROFILE(profileid)
);`;

const projectTable = `CREATE TABLE IF NOT EXISTS PROJECT(
  project VARCHAR(30) PRIMARY KEY,
  description TEXT,
  link VARCHAR(25),
  profileid INT REFERENCES PROFILE(profileid)
);`;

const tableCreationQueries = [
  profileTable,
  authenticationTable,
  domainTable,
  projectTable,
];

module.exports = tableCreationQueries;
