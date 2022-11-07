import { Module } from '@nestjs/common';
import { VideosModule } from './modules/videos/videos.module';
import { TestingModule } from './modules/testing/testing.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './configs/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfigService()),
    VideosModule,
    TestingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
