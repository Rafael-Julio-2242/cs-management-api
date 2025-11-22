import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { Account } from '@/modules/account/account.entity';
import { User } from '@/modules/user/user.entity';

@Entity('service_channels')
export class ServiceChannel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id' })
  tenantId!: string;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id' })
  account!: Account;

  @Column({ type: 'uuid', name: 'account_id' })
  accountId!: string;

  @Column({ type: 'text' })
  provider!: string;

  @Column({ type: 'text', name: 'external_id' })
  externalId!: string;

  @Column({ type: 'text', name: 'default_from' })
  defaultFrom!: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: Record<string, any>;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdByUser!: User;

  @Column({ type: 'uuid', name: 'created_by' })
  createdBy!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updatedByUser?: User;

  @Column({ type: 'uuid', name: 'updated_by', nullable: true })
  updatedBy?: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'deleted_by' })
  deletedByUser?: User;

  @Column({ type: 'uuid', name: 'deleted_by', nullable: true })
  deletedBy?: string;
}
