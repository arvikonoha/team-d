const { pool } = require("../../config/database");
const { CREATE_ACCOUNT, FETCH_ACCOUNT } = require("./queries");

async function getProfileId(userid) {
  let result = await pool.query(FETCH_ACCOUNT, [userid]);
  if (result.rowCount === 1) {
    let [{ profileid }] = result.rows;
    return profileid;
  } else throw Error("No account is registered with the user id " + userid);
}

async function createAccount(userid) {
  let { rowCount: isInserted } = await pool.query(CREATE_ACCOUNT, [
    userid,
    null,
  ]);
  return Boolean(isInserted);
}

async function getOrCreateAccount(userid) {
  try {
    let profileid = await getProfileId(userid);
    return { userid, profileid };
  } catch (error) {
    if (
      error.message ===
      "No account is registered with the user id " + userid
    ) {
      let isInserted = await createAccount(userid);
      if (isInserted) return { userid, profileid: null };
      else
        Error(
          "Failed to create account for " + userid + " due to unexpected error"
        );
    }
  }
}

module.exports = getOrCreateAccount;
