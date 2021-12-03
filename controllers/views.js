const falsoObjeto=require ("../models/falsoObjeto.js")
const falsoUsuario = require ('../models/falsoUsuario')
const apiMongo= require('../utils/mongoDB')
const offertSQL = require('../models/favorites')
const usersSQL = require('../models/user')

const views ={
    home: (req, res) => {        
        res.status(200).render('home')
      },
    signup: (req, res) => {
        res.status(200).render('signup')
      },
    login: (req, res) => {
        res.status(200).render('login')
      },
    favorites: async(req, res) => {
        const offerts = await offertSQL.getFavorites()
        res.status(200).render('favorites', {_offerts:offerts})
      },
    profile: (req, res) => {
        res.status(200).render('profile', {users: falsoUsuario})
      },
    users: async (req, res) => {
      const users = await usersSQL.getUserByEmail()
        res.status(200).render('users', {users: users})
      },
    dashboard: async (req, res) => {
        const offerts= await apiMongo.getOfferts()
        res.status(200).render('dashboard', {_offerts:offerts})
      }
};
module.exports=views