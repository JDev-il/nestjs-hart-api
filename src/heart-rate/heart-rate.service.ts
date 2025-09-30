import { Injectable } from '@nestjs/common';
import { SeedService } from '../db/seed.service';
import { HeartRateReading } from './entities/heart-rate-reading.entity';

@Injectable()
export class HeartRateService {
  private readings: HeartRateReading[];

  constructor(private readonly seedService: SeedService) {
    this.readings = this.seedService.getHeartRates();
  }

  getByPatient(patientId: string): HeartRateReading[] {
    return this.readings.filter((r) => r.patientId === patientId);
  }

  getHighEvents(patientId: string): HeartRateReading[] {
    return this.getByPatient(patientId).filter((r) => r.bpm > 100);
  }

  getAnalytics(patientId: string, from: Date, to: Date) {
    const relevant = this.getByPatient(patientId).filter((r) =>
      r.timestamp >= from && (r.timestamp <= to),
    );

    const bpmValues = relevant.map((r) => r.bpm);
    const avg = bpmValues.reduce((a, b) => a + b, 0) / bpmValues.length || 0;

    return {
      average: Number(avg.toFixed(2)),
      min: Math.min(...bpmValues),
      max: Math.max(...bpmValues),
      count: bpmValues.length,
    };
  }
}
