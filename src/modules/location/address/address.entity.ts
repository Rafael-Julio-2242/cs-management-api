import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { Contact } from '@/modules/contact/contact.entity';
import { Country } from '@/modules/location/country/country.entity';
import { State } from '@/modules/location/state/state.entity';
import { City } from '@/modules/location/city/city.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  tenantId!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenantId' })
  tenant!: Tenant;

  @Column({ type: 'uuid' })
  contactId!: string;

  @ManyToOne(() => Contact)
  @JoinColumn({ name: 'contactId' })
  contact!: Contact;

  @Column({ type: 'uuid' })
  countryId!: string;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'countryId' })
  country!: Country;

  @Column({ type: 'uuid' })
  stateId!: string;

  @ManyToOne(() => State)
  @JoinColumn({ name: 'stateId' })
  state!: State;

  @Column({ type: 'uuid' })
  cityId!: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'cityId' })
  city!: City;

  @Column({ type: 'varchar', length: 20 })
  postalCode!: string;

  @Column({ type: 'varchar', length: 255 })
  street!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  complement?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  number?: string;

  @Column({ type: 'boolean', default: false })
  isMain!: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}