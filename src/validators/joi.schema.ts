import Joi from 'joi';

const arraySchema = (itemSchema: Joi.Schema) => Joi.array().items(itemSchema);

export const authSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export const idSchema = Joi.object().keys({
    id: Joi.number().integer().min(0),
});

export const runSchema = Joi.object().keys({
    distance: Joi.number().integer().min(1).required(),
    time: Joi.number().integer().min(1).required(),
    date: Joi.date().required(),
});

export const imageSchema = Joi.object().keys({
    name: Joi.string().required(),
    path: Joi.string().required(),
    raw: Joi.string().required(),
});

export const runReportSchema = Joi.object().keys({
    title: Joi.string().required(),
    averageSpeed: Joi.number().required(),
    averageTime: Joi.number().required(),
    totalDistants: Joi.number().required(),
});

export const runsSchema = arraySchema(runSchema);
export const images = arraySchema(imageSchema);
export const runReports = arraySchema(runReportSchema);