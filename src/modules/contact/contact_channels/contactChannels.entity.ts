import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { Contact } from '@/modules/contact/contact.entity';
import { Tenant } from '@/modules/tenancy/tenant.entity';

export type ContactChannelType = 'email' | 'phone';

@Entity('contact_channels')
export class ContactChannel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant, { nullable: false })
  @JoinColumn({ name: 'tenantId' })
  tenant!: Tenant;

  @Column({ type: 'uuid' })
  tenantId!: string;

  @Column({ type: 'varchar', length: 50 })
  type!: ContactChannelType;

  @ManyToOne(() => Contact, contact => contact.channels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'contactId' })
  contact!: Contact;

  @Column({ type: 'uuid' })
  contactId!: string;

  @Column({ type: 'text' })
  value!: string;

  @Column({ name: 'is_main', default: false })
  isMain!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
