import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { enviroment } from 'src/utils/enviroments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('le_xot`s lists').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customCss: `.swagger-ui .topbar { display: none } .version { display: none } .swagger-ui .info .title small.version-stamp { display: none } .swagger-ui .info .title small { display: none }`,
  });

  await app.listen(enviroment.appPort);
}
bootstrap();
