const { pool } = require("../../config/database");
const { FETCH_DOMAINS, FETCH_PROJECTS, FETCH_PROFILE } = require("./queries");

async function getDomains(profileid) {
  return (await pool.query(FETCH_DOMAINS, [profileid])).rows;
}

async function getProjects(profileid) {
  return (await pool.query(FETCH_PROJECTS, [profileid])).rows;
}

async function getProfile(profileid) {
  let [profile] = await (await pool.query(FETCH_PROFILE, [profileid])).rows;
  let domains = await getDomains(profileid);
  let projects = await getProjects(profileid);
  return { profile, domains, projects };
}

module.exports = { getProfile };
