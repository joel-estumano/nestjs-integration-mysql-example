import { Module } from '@nestjs/common';
import { HerosController } from './heros.controller';
import { HerosService } from './heros.service';
import { Hero } from './entities/hero.entity';
import { DataSource } from 'typeorm';
import { DatabaseModule } from '../database/database.module';

const heroProviders = [
  {
    provide: 'HERO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Hero),
    inject: ['DATA_SOURCE'],
  },
];

@Module({
  controllers: [HerosController],
  providers: [HerosService, ...heroProviders],
  imports: [DatabaseModule],
})
export class HerosModule {}
