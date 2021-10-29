const express = require("express");
const db = require("../models");

const movieRouter = express.Router();

movieRouter.get("/", async (req, res) => {
  const { Movies } = db;

  const movies = await Movies.findAll({
    
  });
  return res.json({success:true,movies})

})

// add a movie in database
movieRouter.post('/add',async(req,res,next)=>{
  const {Movies}=db;
  const movie=await Movies.create({
   imdbID:req.body.imdbID,
   title:req.body.title,
   year_of_release:req.body.year_of_release,
   rating:req.body.rating,
   earning:req.body.earning,
   genre:req.body.genre,
  })
  return res.json({success:true,movie})

})

//Delete a movie in data base 
movieRouter.delete('/:movieid',async(req,res,next)=>{
  const {Movies}=db;
  const {movieid}=req.params;
  const movie=await Movies.destroy({
        where : {
      id : movieid
    }
})
  return res.json({success:true,movie})

})

// here i update the movie in database
movieRouter.put('/:Id',async(req,res,next)=>{
  const {Movies}=db;
  const {Id}=req.params;
  const {title,year_of_release,rating,poster,earning,genre}=req.body;

  const updateRecord =await Movies.update(
    {
    "title":title,
    "year_of_release":year_of_release,
    "rating":rating,
    "poster":poster,
    "earning":earning,
    "genre":genre
    },
    {
    where:{
      id:Id
    }})

  return res.json({success:true, updateRecord})
})

// here i perform find the movie by id
movieRouter.get('/:movieid',async(req,res,next)=>{
  const {Movies}=db;
  const {movieid}=req.params;
  const movie=await Movies.findAll({
        where : {
      id : movieid
    }
})
  return res.json({success:true,movie})
})
module.exports = movieRouter