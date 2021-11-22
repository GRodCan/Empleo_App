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
        res.status(200).render('favorites')
      },
    profile: (req, res) => {
        res.status(200).render('profile')
      },
    users: (req, res) => {
        res.status(200).render('users')
      },
    dashboard: (req, res) => {
        res.status(200).render('dashboard')
      }
};
module.exports=views