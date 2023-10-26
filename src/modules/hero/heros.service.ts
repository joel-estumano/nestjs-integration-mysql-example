import { Inject, Injectable } from '@nestjs/common';
import { HeroCreateDto } from './dtos/hero-create.dto';
import { Repository } from 'typeorm';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HerosService {
  constructor(
    @Inject('HERO_REPOSITORY') private heroRepository: Repository<Hero>,
  ) { }

  async create(dto: HeroCreateDto): Promise<Hero> {
    return this.heroRepository.save(dto);
  }

  async list(): Promise<Hero[]> {
    return await this.heroRepository.find();
  }
}
