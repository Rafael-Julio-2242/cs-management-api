import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from '@/modules/location/country/country.entity';
import { City } from '@/modules/location/city/city.entity';

@Entity('states')
export class State {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  countryId!: string;

  @ManyToOne(() => Country, (country) => country.states, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'countryId' })
  country!: Country;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @OneToMany(() => City, (city) => city.state)
  cities!: City[];
}
