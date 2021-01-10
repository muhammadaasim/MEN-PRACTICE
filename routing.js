const express = require('express');
const app = express();

const router1=express.Router();
const router2=express.Router();
const router3=express.Router();


router1.get('/',(req,res)=>res.send('API is live'));
router1.get('/user',(req,res)=>res.send('user is live'));
router1.get('/group',(req,res)=>res.send('Group is live'));

router2.get('/chat',(req,res)=>res.send('chat is live'));
router2.get('/dashboard',(req,res)=>res.send('Dashboard is live'));
router3.get('/:username',(req,res)=>res.send(JSON.stringify(req.params)));

app.use('/v1',router1);
app.use('/v2',router2);
app.use('/user',router3);

app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});