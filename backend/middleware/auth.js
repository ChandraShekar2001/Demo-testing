const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req, res, next) => {
    const {token} = req.headers;
    if(!token) {
        return res.status(401).json({msg: "No token, authorization denied"});
    }
    try {
        const decoded = jwt.verify(token, 'ABCDEFGHIJK');
        req.user = decoded.id;
        next();
    }
    catch{
        res.status(400).json({msg: "Token is not valid"});
    }
}