const login = async (req, res, next) => {
    // console.log(req);
    req.session.userId = req.user._id;
    res.cookie("sessionId", req.session.id, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production" ? true : false,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 12),
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.json({ state: "success" });
};
const logout = async (req, res, next) => {
    // console.log(req.user)
    if (req.user) {
        req.logOut((err) => {
            if (err) {
                next(err);
            } else {
                res.json("success");
            }
        });
    } else {
        let err = { state: "fail", status: 404, message: "You are not logged in" };
        next(err);
    }
};
const getCurrentUser = async (req, res, next) => {
    const { sessionId } = req.body;
    if(req.session.id === sessionId) {
        res.json(req.user);
    }
}
module.exports = { login, logout, getCurrentUser};