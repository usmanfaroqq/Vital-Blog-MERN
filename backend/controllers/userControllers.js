const {body, validationResult} = require('express-validator')

module.exports.registerValidation = [
    body('name').not().isEmpty().trim().withMessage('Name is required'),
    body('email').not().isEmpty().trim().withMessage('Email is required'),
    body('password').isLength({min:6}).withMessage('Password Must be at least 6 characters'),
]


module.exports.registerController = (req, res) => {
   const {name, email, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.json(errors.array());
    }else(
        res.json('working')
    )
}