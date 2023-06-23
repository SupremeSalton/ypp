import { resolve } from 'path';
import express from 'express'

// const express = require('express');
// const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(`./dist`))

app.get('*', (_,res) => {
  res.sendFile(resolve('dist', 'index.html'));
  
})

app.listen(PORT, function() {
  console.log(`Server started ${PORT}`);
});