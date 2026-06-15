const logoutController = {};

logoutController.logout = (req, res) =>{
    res.clearCookie("token");

    res.json({messsage: "logout successfully"});
}
export default logoutController;