import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { Account } from '@/modules/account/account.entity';
import { User } from '@/modules/user/user.entity';
import { AccountService } from '@/modules/account_service/accountService.entity';

export type ServiceType = 'auto' | 'human';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant, { nullable: false })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ name: 'tenant_id', type: 'uuid' })
  tenantId!: string;

  @ManyToOne(() => Account, { nullable: false })
  @JoinColumn({ name: 'account_id' })
  account!: Account;

  @Column({ name: 'account_id', type: 'uuid' })
  accountId!: string;

  @Column({ name: 'type', type: 'varchar', length: 50 })
  type!: ServiceType;

  @Column({ name: 'name', type: 'text' })
  name!: string;

  @Column({ name: 'is_active', default: true })
  active!: boolean;

  @Column({ name: 'allow_transfer_to_this_service', default: true })
  allowTransferToThisService!: boolean;

  @Column({ name: 'allow_direct_transfer_to_agent', default: false })
  allowDirectTransferToAgent!: boolean;

  @Column({ name: 'automatic_end_queue_after_working_hours', default: false })
  automaticEndQueueAfterWorkingHours!: boolean;

  @OneToMany(() => AccountService, accountService => accountService.service)
  accountServices!: AccountService[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date | null;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'created_by_id' })
  createdBy!: User;

  @Column({ name: 'created_by_id', type: 'uuid' })
  createdById!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by_id' })
  updatedBy?: User | null;

  @Column({ name: 'updated_by_id', type: 'uuid', nullable: true })
  updatedById?: string | null;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'deleted_by_id' })
  deletedBy?: User | null;

  @Column({ name: 'deleted_by_id', type: 'uuid', nullable: true })
  deletedById?: string | null;
}
