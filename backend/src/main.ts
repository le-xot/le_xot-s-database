import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import env from 'src/utils/enviroments';
import { apiReference } from '@scalar/nestjs-api-reference';
import cookieParser from 'cookie-parser';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  const config = new DocumentBuilder().setTitle('le_xot`s lists').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customCss: `.swagger-ui .topbar { display: none } .version { display: none } .swagger-ui .info .title small.version-stamp { display: none } .swagger-ui .info .title small { display: none }`,
  });

  app.use(
    '/reference',
    apiReference({
      spec: {
        content: document,
      },
    }),
  );

  await app.listen(env.appPort);
  console.log(`Application\'s running on: http://localhost:${env.appPort}/api`);
  console.log(`http://localhost:3000/reference`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
