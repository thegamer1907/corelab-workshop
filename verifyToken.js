var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User = require('./models/user');

async function check(req) {

    var token = req.headers['authorization'];
    if (!token || !token.split(' ')[1])
        throw new Error('No token provided');
    var decoded = await jwt.verify(token.split(' ')[1], config.secret);
    req.username = decoded.username;
    var obj = await User.findOne({ username: req.username })
    if (!obj)
        throw new Error('Failed to find user');
    return true;
}



function verifyToken(req, res, next) {

    check(req).then((obj) => {
        next();
    }).catch((err) => {
        res.status(401).send({ auth: false, message: err.toString() });
    });

}

module.exports = verifyToken;