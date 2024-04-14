const router = require("express").Router();
const {
  getUsers,
  addUser,
  editUser,
} = require("../controllers/userController");

router.get("/", getUsers);

router.get("/api/user/add", addUser);

router.get("/api/user/edit", editUser);

router.post("/api/user/add", (req,res)=>{});

router.patch("/api/user/edit/:id", (req, res) => {});

module.exports = router;
