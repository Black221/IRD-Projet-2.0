const Joi = require("joi");

module.exports.registerValidation = data => {
    const schema = Joi.object({
        firstname: Joi
            .string()
            .min(3)
            .required(),
        lastname: Joi
            .string()
            .min(2)
            .required(),
        email: Joi
            .string()
            .required()
            .email(),
        password: Joi
            .string()
            .min(8)
            .required(),
        login: Joi
            .string()
            .required()
            .min(6)
    });
    return schema.validate(data);
}

module.exports.loginValidation = data => {
    const schema = Joi.object({
        password: Joi
            .string()
            .min(8)
            .required(),
        login: Joi
            .string()
            .required()
            .min(6)
    });
    return schema.validate(data);
}
module.exports.updateValidation = data => {
    const schema = Joi.object({
        firstname: Joi
            .string()
            .min(3)
            .required(),
        lastname: Joi
            .string()
            .min(2)
            .required(),
        email: Joi
            .string()
            .required()
            .email(),
    })
    return schema.validate(data);
}


