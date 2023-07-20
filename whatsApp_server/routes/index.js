// top level route for all routes
import express from 'express';
const appRoute = express.Router();



appRoute.get('/', (req,res)=>{
res.send({status:true})
})





export default appRoute;