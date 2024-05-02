const express=require('express');
const server=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

main().catch(err=>console.log(err));

async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/demo');
console.log('db connected');
}