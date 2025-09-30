import { Injectable } from '@nestjs/common';

import { HeartRateReading } from '../heart-rate/entities/heart-rate-reading.entity';
import { Patient } from '../patients/entities/patient.entity';

@Injectable()
export class SeedService {
  private patients: Patient[] = [];
  private heartRates: HeartRateReading[] = [];

  constructor() { }

  getPatients(): Patient[] {
    return this.patients;
  }

  getHeartRates(): HeartRateReading[] {
    return this.heartRates;
  }
}
