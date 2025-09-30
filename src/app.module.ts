import { Module } from '@nestjs/common';
import { SeedService } from './db/seed.service';
import { HeartRateService } from './heart-rate/heart-rate.service';
import { PatientsService } from './patients/patients.service';

@Module({
  imports: [],
  providers: [PatientsService, HeartRateService, SeedService],
})
export class AppModule {}
