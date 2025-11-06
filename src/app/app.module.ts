import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from '@/lib/auth';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule.forRoot({ auth })],
  controllers: [],
  providers: [],
})
export class AppModule {}
