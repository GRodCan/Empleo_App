const falsoObjeto=require ("../models/falsoObjeto.js")
const falsoUsuario = require ('../models/falsoUsuario')
const apiMongo= require('../utils/mongoDB')

const views ={
    home: (req, res) => {        
        let data=[]
        res.status(200).render('home', {data:data})
      },
    signup: (req, res) => {
        res.status(200).render('signup')
      },
    login: (req, res) => {
        res.status(200).render('login')
      },
    favorites: (req, res) => {
        res.status(200).render('favorites', {_offerts:falsoObjeto})
      },
    profile: (req, res) => {
        res.status(200).render('profile', {users: falsoUsuario})
      },
    users: (req, res) => {
        res.status(200).render('users', {users: falsoUsuario})
      },
    dashboard: async (req, res) => {
        const offerts= await apiMongo.getAllOfferts()
        res.status(200).render('dashboard', {_offerts:offerts})
      }
};
module.exports=views