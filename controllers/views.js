const falsoObjeto=require ("../models/falsoObjeto.js")
const falsoUsuario = require ('../models/falsoUsuario')

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
    favorites: (req, res) => {
        res.status(200).render('favorites', {_offerts:falsoObjeto})
      },
    profile: (req, res) => {
        res.status(200).render('profile', {users: falsoUsuario})
      },
    users: (req, res) => {
        res.status(200).render('users', {users: falsoUsuario})
      },
    dashboard: (req, res) => {
        res.status(200).render('dashboard', {_offerts:falsoObjeto})
      }
};
module.exports=views