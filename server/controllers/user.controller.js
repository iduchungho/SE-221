const User = require('../models/user.models');
const login = async (req, res, next) => {
    res.json({ state: 'success', user: req.user });
}
const logout = async (req, res, next) => {
    const { id } = req.body;
    if (req.user._id.toString() === id) {
        req.logOut((err) => {
            if (err) { next(err) }
            else {
                console.log("logout success");
                res.json('success')
            }
        })
    }
    else {
        let err = { state: "fail", status: 500, message: "Something went wrong" }
        next(err)
    }
}
const getCurrentUser = async (req,res,next) => {
    const {id} = req.body;
    const currentUser = await User.findById(id);
    res.json({state:"success",user:currentUser}) 
}
module.exports = { login, logout, getCurrentUser };