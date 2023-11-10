const validateData = (fields) => {
    return (req, res, next) => {
        let missingFields = [];
        for (let field of fields) {
            if (!req.body[field]) {
                missingFields.push(field);
            }
        }
        if (missingFields.length !== 0) {
            let str = `Given fields are missing: ${missingFields.join(', ')}`;
            return res.status(502).send(str);
        }
        next();
    };
};

module.exports = { validateData };