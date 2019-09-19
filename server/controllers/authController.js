const bcrypt = require("bcryptjs");

module.exports = {
  getUser: (req, res) => {
    // checking if user is logged in
    if (req.session.user) {
      res.status(200).json(req.session.user);
    } else {
      res.sendStatus(401);
    }
  },
  register: async (req, res) => {
    // set up alias from front-end to db (firstName: first_name)
    const { username, password, firstName: first_name } = req.body;
    const db = req.app.get("db");
    // find if there's a user
    const foundUser = await db.auth.checkForUsername(username);

    // arrays are truthy so accessing first element
    if (foundUser[0]) {
      res.status(409).json("Username Taken");
    } else {
      // create salt
      const salt = bcrypt.genSaltSync(10);
      // create hash from salt
      const hash = bcrypt.hashSync(password, salt);
      // three dynamic variables we're expecting
      const newUser = await db.auth.registerUser(first_name, username, hash);
      // accessing user from session with their appropriate sql names
      req.session.user = {
        user_id: newUser[0].user_id,
        username: newUser[0].username,
        firstName: newUser[0].first_name
      };
      // send back the user from session
      res.status(200).json(req.session.user);
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.auth.checkForUsername(username);

    if (!foundUser[0]) {
      res.status(403).json("Username or Password Incorrect");
    } else {
      // check if password and hash password is the same
      const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash);
      if (!isAuthenticated) {
        res.status(403).json("Username or Password Incorrect");
      } else {
        req.session.user = {
          user_id: foundUser[0].user_id,
          username: foundUser[0].username,
          firstName: foundUser[0].first_name
        };
        res.status(200).json(req.session.user);
      }
    }
  },
  logout: (req, res) => {
    // destroy the session
    req.session.destroy();
    // send back status with ok
    res.sendStatus(200);
  }
};
