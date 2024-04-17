const express = require('express'); 
const bodyParser = require("body-parser")
const Pool = require('pg').Pool;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Mayjay802',
    port: 5432
})

app.post("/register", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const sql = "INSERT INTO logintable (Name, Email, Password, confirmPassword) VALUES ($1, $2, $3, $4)";

    const data = [name, email, password, confirmPassword];
  

    pool.query(sql, data, (error, results) => {
        
        if (error) throw error
        
	
	
}); 
res.redirect('home.html') 
}); 

app.post("/user_status", (req, res) => {

    const stat = req.body.stat;

    const sql = "INSERT INTO status (Stat) VALUES ($1)";

    const data = [stat];
  

    pool.query(sql, data, (error, results) => {
        
        if (error) throw error
        
	
	
}); 
res.redirect('home.html') 
}); 

app.post("/validate", function (req, res) {
	
    let validation = '<a href="home.html" class="btn btn-primary" id="login" name="login">"Login successful! Click on this link to go to the home screen!</a>';

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
    sleep(2000).then(() => {  }); 
	res.redirect('home.html') 
	
}); 


app.get("/data", (req, res) => {
	
const event_1 = "White House Party"; 
const event_2 = "Blue Moon Celebration"
const event_3 = "Weather Patterns"
const event_4 = "Mount Everest Cleanup"
const event_5 = "Space Journey"

const testimony_1 = " Greg - Viewlet has completly changed my son's life for the better!"
const testimony_2 = " Tiffany - My husband had no friends but thanks to viewlet he has made several new friends!"	
	
	res.json({event_1, event_2, event_3, event_4, event_5, testimony_1, testimony_2});
	

}); 



app.post("/registration_complete", function (req, res) {
	
    let registrated = '<a href="home.html" class="btn btn-primary" id="login" name="login">"Registeration  successful! Click on this link to go to the home screen!</a>';

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    res.send(registrated);
    sleep(2000).then(() => {  }); 
	res.redirect('register') 
	
});

app.listen(5432, () => {
    console.log("Listening on port 5432");
});