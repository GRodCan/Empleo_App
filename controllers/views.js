const falsoObjeto=require ("../models/falsoObjeto.js")

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
        res.status(200).render('profile')
      },
    users: (req, res) => {
        res.status(200).render('users')
      },
    dashboard: (req, res) => {
        res.status(200).render('dashboard', {_offerts:falsoObjeto})
      }
};
module.exports=views