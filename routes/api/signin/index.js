const getOrCreateAccount = require("../../../models/Auth");
const { getProfile } = require("../../../models/Profile");

const route = require("express").Router();

route.post("/", async (request, response) => {
  try {
    let { uid } = request.body;

    let { userid, profileid } = await getOrCreateAccount(uid);

    response.cookie("userid", userid, { httpOnly: true, maxAge: 6 * 60 * 60 });

    if (profileid === null) return response.json({ userid, profile: null });
    else {
      let { profile, domains, projects } = await getProfile(profileid);
      profile.domains = domains;
      profile.projects = projects;
      return response.json({ userid, profile });
    }
  } catch (error) {
    response.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = route;
