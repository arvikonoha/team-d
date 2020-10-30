const FETCH_DOMAINS = "SELECT domain,expertice from Domain where profileid=$1";

const FETCH_PROJECTS =
  "SELECT project,description,link from PROJECT WHERE profileid=$1";

const FETCH_PROFILE = "SELECT * from PROFILE where profileid=$1";

module.exports = { FETCH_DOMAINS, FETCH_PROFILE, FETCH_PROJECTS };
