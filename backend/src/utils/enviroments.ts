import Joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();

const schema = Joi.object({
  DATASOURCE_URL: Joi.string().uri().required().label('DATASOURCE_URL'),
  JWT_SECRET: Joi.string().required().label('JWT_SECRET'),
  APP_PORT: Joi.number()
    .integer()
    .min(1)
    .max(65535)
    .required()
    .label('APP_PORT'),
}).unknown(true);

const { error, value: envVars } = schema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

interface Config {
  datasourceUrl: string;
  jwtSecret: string;
  appPort: number;
}

const env: Config = {
  datasourceUrl: envVars.DATASOURCE_URL,
  jwtSecret: envVars.JWT_SECRET,
  appPort: envVars.APP_PORT,
};

export default env;
