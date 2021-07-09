import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.PORT, 10) || 3000
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Azure Login')
    .setDescription('Use the Azure Client Credential and Password flow with this api')
    .setVersion('1.0')
    .addTag('Azure')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  console.log(`Listening on Port: ${port}`)
}
bootstrap();
