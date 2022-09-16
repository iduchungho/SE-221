const login = async (req,res,next) => {
    res.json({state : 'success', user : req.user});
}
const logout = async (req,res,next) => {
    if(req.user)
    {
      req.logOut((err)=>{
        if(err) {next(err)}
        else
        {
          res.json('success')
        }
      })
    }
    else
    {
      let err = {state:"fail",status:404, message:"You are not logged in"}
      next(err)
    }
}
module.exports = { login , logout};