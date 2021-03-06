const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.get("/", authorize, async (req, res) => {
  try {
    // const user = await pool.query(
    //   "SELECT user_name FROM users WHERE user_id = $1",
    //   [req.user.id]
    // );

    const user = await pool.query(
      "SELECT u.user_name, c.choices_id, c.choice FROM users AS u LEFT JOIN choices AS c ON u.user_id = c.user_id WHERE u.user_id = $1",
      [req.user.id]
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/", authorize, async (req, res) => {
  try {
    console.log(req.body);
    const { choice } = req.body;
    const newChoice = await pool.query(
      "INSERT INTO choices (user_id, choice) VALUES ($1, $2) RETURNING *",
      [req.user.id, choice]
    );

    res.json(newChoice.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/prefOne/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { pref } = req.body;
    const updatePrefOne = await pool.query(
      "UPDATE prefOne SET pref = $1 WHERE pref_id = $2 AND user_id = $3 RETURNING *",
      [pref, id, req.user.id]
    );

    if (updatePrefOne.rows.length === 0) {
      return res.json("This todo is not yours");
    }

    res.json("Preference was updated");
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/prefTwo/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { pref } = req.body;
    const updatePrefTwo = await pool.query(
      "UPDATE prefTwo SET pref = $1 WHERE pref_id = $2 AND user_id = $3 RETURNING *",
      [pref, id, req.user.id]
    );

    if (updatePrefTwo.rows.length === 0) {
      return res.json("This todo is not yours");
    }

    res.json("Preference was updated");
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/prefThree/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { pref } = req.body;
    const updatePrefThree = await pool.query(
      "UPDATE prefThree SET pref = $1 WHERE pref_id = $2 AND user_id = $3 RETURNING *",
      [pref, id, req.user.id]
    );

    if (updatePrefThree.rows.length === 0) {
      return res.json("This todo is not yours");
    }

    res.json("Preference was updated");
  } catch (err) {
    console.error(err.message);
  }
});


module.exports = router;