const FETCH_ACCOUNT = "SELECT profileid from AUTH where userid=$1";

const CREATE_ACCOUNT = "INSERT INTO AUTH VALUES($1,$2)";

module.exports = { FETCH_ACCOUNT, CREATE_ACCOUNT };
