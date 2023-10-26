import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: configService.get<string>('dbConfig.host'),
                port: configService.get<number>('dbConfig.port'),
                username: configService.get<string>('dbConfig.username'),
                password: configService.get<string>('dbConfig.password'),
                database: configService.get<string>('dbConfig.database'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];

@Module({
    imports: [ConfigModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }
