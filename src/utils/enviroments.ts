import Joi from 'joi';
import dotenv from 'dotenv';
import path from 'path';

// Загружаем переменные из .env файла
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Определяем схему валидации с использованием Joi
const schema = Joi.object({
  DATASOURCE_URL: Joi.string().uri().required().label('DATASOURCE_URL'),
  JWT_SECRET: Joi.string().required().label('JWT_SECRET'),
  APP_PORT: Joi.number()
    .integer()
    .min(1)
    .max(65535)
    .required()
    .label('APP_PORT'),
}).unknown(true); // unknown(true) позволяет включать необязательные переменные, которые не были явно указаны в схеме

// Валидируем переменные окружения
const { error, value: envVars } = schema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Определяем интерфейс для конфигурации
interface Config {
  datasourceUrl: string;
  jwtSecret: string;
  appPort: number;
}

// Экспортируем валидированные переменные окружения
const env: Config = {
  datasourceUrl: envVars.DATASOURCE_URL,
  jwtSecret: envVars.JWT_SECRET,
  appPort: envVars.APP_PORT,
};

export default env;
