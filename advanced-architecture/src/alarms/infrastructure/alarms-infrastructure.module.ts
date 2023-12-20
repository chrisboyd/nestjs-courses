import { Module } from '@nestjs/common';
import { OrmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { InMemoryPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';
import { SharedModule } from '../../shared/shared.module';

@Module({ imports: [SharedModule], exports: [SharedModule] })
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModel =
      driver === 'orm' ? OrmPersistenceModule : InMemoryPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModel],
      exports: [persistenceModel],
    };
  }
}
