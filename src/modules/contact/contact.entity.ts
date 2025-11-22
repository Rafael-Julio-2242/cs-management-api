import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { User } from '@/modules/user/user.entity';
import { ContactChannel } from '@/modules/contact/contact_channels/contactChannels.entity';
import { SocialLink } from '@/modules/contact/social_links/socialLinks.entity';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  tenantId!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenantId' })
  tenant!: Tenant;

  @Column({ type: 'varchar', length: 255 })
  firstName!: string;

  @Column({ type: 'varchar', length: 255 })
  lastName!: string;

  @Column({ type: 'text', nullable: true })
  bio?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  document?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  source?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  externalId?: string;

  @Column({ type: 'jsonb', nullable: true })
  customFields?: Record<string, any>;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt!: Date | null;

  @Column({ type: 'uuid' })
  createdById!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdById' })
  createdBy!: User;

  @Column({ type: 'uuid', nullable: true })
  updatedById?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updatedById' })
  updatedBy?: User | null;

  @Column({ type: 'uuid', nullable: true })
  deletedById?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'deletedById' })
  deletedBy?: User | null;

  @OneToMany(() => ContactChannel, channel => channel.contact, { cascade: true })
  channels!: ContactChannel[];

  @OneToMany(() => SocialLink, socialLink => socialLink.contact, { cascade: true })
  socialLinks!: SocialLink[];
}