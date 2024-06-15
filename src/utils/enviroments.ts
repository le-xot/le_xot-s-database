import 'dotenv/config';

export interface Enviroment {
  dataSourseUrl: string;
  jwtSecret: string;
  appPort: number;
}

export function validated(): Enviroment {
  const { DATASOURSE_URL, JWT_SECRET, APP_PORT } = process.env;

  if (!DATASOURSE_URL || !JWT_SECRET || !APP_PORT) {
    throw new Error('Enviroments not found');
  }

  const dataSourseUrl = DATASOURSE_URL;
  const jwtSecret = JWT_SECRET;
  const appport = Number(APP_PORT);

  return {
    dataSourseUrl,
    jwtSecret,
    appPort: appport,
  };
}

export const enviroment = validated();
