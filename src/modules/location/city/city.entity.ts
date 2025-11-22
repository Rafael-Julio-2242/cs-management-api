import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '@/modules/location/country/country.entity';
import { State } from '@/modules/location/state/state.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  countryId!: string;

  @ManyToOne(() => Country, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'countryId' })
  country!: Country;

  @Column({ type: 'uuid' })
  stateId!: string;

  @ManyToOne(() => State, (state) => state.cities, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'stateId' })
  state!: State;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
