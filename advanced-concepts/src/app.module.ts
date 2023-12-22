import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { RewardsService } from './rewards/rewards.service';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService, RewardsService],
})
export class AppModule {}
