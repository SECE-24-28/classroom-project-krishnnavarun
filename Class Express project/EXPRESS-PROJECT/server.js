// //Node js Cocept of creating server without express

// // const http = require('http');

// // const server = http.createServer((req,res) => {
// //     if(req.url === '/' && req.method === 'GET') {
// //     res.writeHead(200, {'Content-Type': 'application/json'});
// //     res.end(JSON.stringify({message:"Hello from NodeMon"})  );
// //     }
// //     else if(req.url === '/about' && req.method === 'GET') {
// //     res.writeHead(200, {'Content-Type': 'application/json'});
// //     res.end(JSON.stringify({message:"About Page"})  );
// //     }
// //     else{
// //     res.writeHead(404, {'Content-Type': 'application/json'});
// //     res.end(JSON.stringify({message:"Page Not Found"})  );
// //     }
// // });



// // server.listen(3000, () => {
// //     console.log(`Server is run at http://localhost:3000`);
// // });

// // const products =
// // [
// //         {
// //             id: 1,
// //             name: "Product 1",
// //             price: 100,
// //             image: "https://picsum.photos/id/7/300/300"
// //         },
// //         {
// //             id: 2,
// //             name: "Product 2",
// //             price: 200,
// //             image: "https://picsum.photos/id/74/300/300"
// //         },
// //         {
// //             id: 3,
// //             name: "Product 3",
// //             price: 300,
// //             image: "https://picsum.photos/id/15/300/300"
// //         }
// // ]

require('dotenv').config(); //Load environment variables from .env file

// //Node js Cocept of creating server with express    
const express = require('express');
const app = express();
const fs = require('fs');
const connectDB = require('./config/db');
connectDB();


const studentsRouter = require('./routes/students')
const authRouter = require('./routes/auth');
const authMiddleware = require('./middlewares/authMiddleware');



// CORS middleware to allow requests from frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());
app.use('/students',studentsRouter)
app.use('/auth', authRouter);

app.get('/profiles', authMiddleware, (req,res) => {
    res.status(200).json({message:"Profile data", user:req.userData});
});


app.listen(process.env.PORT, () => {
    console.log(`Server is run at http://localhost:${process.env.PORT}`);
});