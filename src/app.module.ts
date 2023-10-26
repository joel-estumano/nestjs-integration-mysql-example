import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helpers/env.helper';
import dbConfig from './common/configs/db.config';
import { HerosModule } from './modules/hero/heros.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs/`);

@Module({
  imports: [
    HerosModule,
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      isGlobal: true,
      load: [dbConfig],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
