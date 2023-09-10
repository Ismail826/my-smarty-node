const express = require('express');
// const bodyParser = require('body-parser');
const cors =require('cors')
const app=express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json())

app.get('/',(req, res) =>{
    res.send("Hello from my over smarty of Pant!!");
});

const users =[
    {
        id:1, name:'ismail',email:'ismail@gmail.com',mobile:'01864608311'
    },
    {
        id:2, name:'joshim',email:'joshim@gmail.com',mobile:'01864608310'
    },
    {
        id:3, name:'sabnur',email:'sabnur@gmail.com',mobile:'01864608312'
    },
    {
        id:4, name:'umor',email:'umor@gmail.com',mobile:'01864608311'
    },
    {
        id:5, name:'sani',email:'sani@gmail.com',mobile:'01864608315'
    },
    {
        id:6, name:'shakib',email:'shakib@gmail.com',mobile:'01864608315'
    },
    {
        id:7, name:'king',email:'king@gmail.com',mobile:'01864608319'
    },
	{
        id:8, name:'king',email:'king@gmail.com',mobile:'01864608319'
    },
]

app.get('/users',(req, res)=>{
    // console.log('query',req.query)

    if(req.query.name){
//filter by query parameter
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(matched)
    }

   else{
        res.send(users)
   }
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    // const user =users[id];
    const user =users.find(u=>u.id === id);
    res.send(user);
})

app.post('/user',(req, res)=>{
	
	console.log('request',req.body)
    const user =req.body;
    user.id = users.length + 1;
    users.push(user);
	res.send(user)
})

app.listen(port, ()=>{
    console.log('Listening To Port');
})