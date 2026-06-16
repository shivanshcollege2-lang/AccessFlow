exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        next();
    });
};

exports.isAdmin = (req, res, next) => {
    User.findById(req.userId, (err, user) => {
        if (err || !user) {
            return res.status(404).send('User Not Found.');
        }

        if (user.role !== 'Administrator') {
            return res.status(403).json({ message: 'Require Admin Role!' });
        }
        next();
    });
};

exports.isSecurityGuard = (req, res, next) => {
    User.findById(req.userId, (err, user) => {
        if (err || !user) {
            return res.status(404).send('User Not Found.');
        }

        if (user.role !== 'Security Guard') {
            return res.status(403).json({ message: 'Require Security Guard Role!' });
        }
        next();
    });
};