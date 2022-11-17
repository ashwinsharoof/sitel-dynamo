import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';

async function bootstrap() {
  dynamoose.aws.sdk.config.update({
    accessKeyId: 'ACCESS_KEY',
    secretAccessKey: 'SECRET_ACCESS_KEY',
    region: 'INDIA',
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  
}
bootstrap();
