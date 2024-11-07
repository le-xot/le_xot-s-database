import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { apiReference } from '@scalar/nestjs-api-reference'
import cookieParser from 'cookie-parser'
import { env } from 'src/utils/enviroments'
import { AppModule } from './app.module'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser())
  app.enableCors()
  const config = new DocumentBuilder().setTitle('le_xot`s lists').build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  if (env) {
    app.use(
      '/reference',
      apiReference({
        spec: {
          content: document,
        },
      }),
    )
  }

  app.setGlobalPrefix('/api')

  await app.listen(env.APP_PORT)
  console.log(`http://localhost:${env.APP_PORT}/reference`)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
