import { Injectable, NotFoundException } from '@nestjs/common';
import { SeedService } from '../db/seed.service';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  private patients: Patient[];

  constructor(private readonly seedService: SeedService) {
    this.patients = this.seedService.getPatients();
  }

  findById(id: string): Patient {
    const patient = this.patients.find((p) => p.id === id);
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  incrementRequestCount(id: string): Patient {
    const patient = this.findById(id);
    patient.requestCount++;
    return patient;
  }

  findAll(): Patient[] {
    return this.patients;
  }
}
