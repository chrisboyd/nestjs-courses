import { Injectable } from '@nestjs/common';
import { CreateAlarmRepository } from '../../../../application/ports/create-alarm.repository';
import { Alarm } from '../../../../domain/alarm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { FindAlarmsRepository } from '../../../../application/ports/find-alarms.repository';
import { UpsertMaterializedAlarmRepository } from '../../../../application/ports/upsert-materialized-alarm.repository';
import { AlarmReadModel } from '../../../../domain/read-models/alarm.read-model';

@Injectable()
export class InMemoryAlarmRepository
  implements
    CreateAlarmRepository,
    FindAlarmsRepository,
    UpsertMaterializedAlarmRepository
{
  private readonly alarms = new Map<string, AlarmEntity>();
  private readonly materializedAlarms = new Map<string, AlarmEntity>();

  async findAll(): Promise<AlarmReadModel[]> {
    return Array.from(this.materializedAlarms.values());
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persistenceModel = AlarmMapper.toPersistence(alarm);
    this.alarms.set(alarm.id, persistenceModel);

    const newEntity = this.alarms.get(alarm.id);
    return AlarmMapper.toDomain(newEntity);
  }

  async upsert(
    alarm: Pick<AlarmReadModel, 'id'> & Partial<AlarmReadModel>,
  ): Promise<void> {
    if (this.materializedAlarms.has(alarm.id)) {
      this.materializedAlarms.set(alarm.id, {
        ...this.materializedAlarms.get(alarm.id),
        ...alarm,
      });
    }
  }
}
