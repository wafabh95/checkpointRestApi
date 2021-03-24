require("dotenv/config");
const mongoose = require('mongoose');
const user = require('./modals/User');
express = require('express'),
app = express();
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })

var bodyParser = require('body-parser'); // configure the app to use bodyParser() 
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json()); // ... Your routes and methods here 




app.post("/add_users", async (req, res) => {
		const myuser = new user (req.body);
		await myuser.save();
		res.send(myuser);
})
 

app.get("/users", async (req, res) => {
	const users = await user.find();
	res.json(users)
})

app.delete("/deleteuser/:id", async (req, res) => {
const removeUser = await user.remove({_id: req.params.id});
res.json(removeUser)
})

app.put("/updateuser/:id", async (req, res) => {
	const updateuser = await user.updateOne({_id: req.params.id},{$set: {name:req.body.name}});
     res.json(updateuser)
})




app.listen(5000, () => {
	console.log("Server has started!")
})