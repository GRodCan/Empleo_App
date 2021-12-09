const falsoObjeto=require ("../models/falsoObjeto.js")
const falsoUsuario = require ('../models/falsoUsuario')
const apiMongo= require('../utils/mongoDB')
const offertSQL = require('../models/favorites')
const usersSQL = require('../models/user')

const views ={
    home: (req, res) => {
        res.status(200).render('home', {log: req.log})
      },
    signup: (req, res) => {
        res.status(200).render('signup', {log: req.log})
      },
    login: (req, res) => {
        res.status(200).render('login', {log: req.log})
      },
    favorites: async(req, res) => {
        const email = await req.user.email
        const user = await usersSQL.getUserByEmail(email)
        const offerts = await offertSQL.getFavorites(user[0].id_user)
        res.status(200).render('favorites', {_offerts:offerts, log: req.log})
      },
    profile: async(req, res) => {
        const email = await req.user.email
        const user = await usersSQL.getUserByEmail(email)
        console.log(user[0])
        res.status(200).render('profile', {user: user[0], log: req.log})
      },
    users: async (req, res) => {
      const email = await req.user.email
      const user = await usersSQL.getUserByEmail(email)
      try{
      if(user[0].administrador == true){
        const users = await usersSQL.getUserByEmail()
        res.status(200).render('users', {users: users, log: req.log})
      }else{
        console.log("Error")
      }}catch(error){
        throw error
      }
      },
    dashboard: async (req, res) => {
      const email = await req.user.email
      const user = await usersSQL.getUserByEmail(email)
      try{
      if(user[0].administrador == true){
        const offerts= await apiMongo.getOfferts()
        res.status(200).render('dashboard', {_offerts:offerts, log: req.log})
      }else{
        console.log("Error")
      }}catch(error){
        throw error
      }

      }
};
module.exports=views