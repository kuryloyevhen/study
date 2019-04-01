
const permission = (req, res, next) => {
   if (req.session.userRole === 'admin') next();
   else res.status(403).send('Forbidden');
};

module.exports = permission;