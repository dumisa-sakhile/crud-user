const getUsers = async (req,res)=>{
   data = {
     title: "Welcome to the Home Page",
     description: "User Management CRUD System",
   };
   res.status(404).render("home", data); 
}

const addUser = async (req, res) => {
  data = {
    title: "Add new user",
    description: "Add a new user to the system",
  };
  res.status(404).render("add", data);
};

const editUser = async (req, res) => {
  data = {
    title: "Edit the user",
    description: "Edit this user on the system",
  };
  res.status(404).render("edit", data);
};


module.exports = {
  getUsers,
  addUser,
  editUser
}