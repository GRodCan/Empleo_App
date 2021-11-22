const views ={
    home: (req, res) => {
        res.send('Home')
      },
    signup: (req, res) => {
        res.send('SignUp')
      },
    login: (req, res) => {
        res.send('login')
      },
    favorites: (req, res) => {
        res.send('favorites')
      },
    profile: (req, res) => {
        res.send('profile')
      },
    users: (req, res) => {
        res.send('users')
      },
    dashboard: (req, res) => {
        res.send('dashboard')
      }
};
module.exports=views