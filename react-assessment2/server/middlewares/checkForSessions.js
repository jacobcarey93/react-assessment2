module.exports = function (req, res, next) {
    const dbInstance = req.app.get('db')
    const { session } = req;
    if (!session.user) {
         return res.status(403).send();
    } 
    next();
};