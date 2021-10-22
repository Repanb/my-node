 const express = require('express');
 const cors= require('cors')
 const app = express();
 app.use(cors());
 app.use(express.json());

 const port = process.env.PORT || 5000;
 

 const handler =(req, res)=>{
    res.send('Hi and hello from node that is most popular');
 };
 app.get('/', handler);

 const users=[
     {id: 0, name: "joy", age: 23, profession: "student", email: "contact.joy@gmail.com"},
     {id: 1, name: "Mritunjoy", age: 23, profession: "student", email: "Mritunjoy@gmail.com"},
     {id: 2, name: "Sujoy", age: 23, profession: "service", email: "sujoy@gmail.com"},
     {id: 3, name: "Durjoy", age: 23, profession: "student", email: "Durjoy.joy@gmail.com"},
     {id: 4, name: "joyonto", age: 23, profession: "student", email: "joyonto.joy@gmail.com"},
     {id: 5, name: "joya ahsan", age: 23, profession: "student", email: "ahsan.joy@gmail.com"}
    ]
    app.get('/users', (req, res)=>{
        const search= req.query.search;
        // use query parameters
        if(search){
           const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search))
           res.send(searchResult)
           return;
        }else{
            res.send(users)
        }
   
    });

    //app.Method
    app.post('/users', (req, res)=>{
        const newUser = req.body;
        newUser.id =users.length;
        users.push(newUser)
        console.log('hitting', req.body);
        // res.send(JSON.stringify(newUser))
        res.json(newUser)
    });

 app.get("/users", (req, res)=>{
     res.send(users)
 });

 app.get("/users/:id", (req, res)=>{
     const id = req.params.id;
     const user= users[id]
     res.send(user);
 });


 app.listen(port, ()=>{
     console.log('listening to port', port);
 });