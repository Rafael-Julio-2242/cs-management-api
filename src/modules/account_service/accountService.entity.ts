import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { Account } from '@/modules/account/account.entity';
import { Service } from '@/modules/service/service.entity';

@Entity('account_services')
export class AccountService {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant, { nullable: false })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ name: 'tenant_id', type: 'uuid' })
  tenantId!: string;

  @ManyToOne(() => Account, account => account.accountServices, { nullable: false })
  @JoinColumn({ name: 'account_id' })
  account!: Account;

  @Column({ name: 'account_id', type: 'uuid' })
  accountId!: string;

  @ManyToOne(() => Service, service => service.accountServices, { nullable: false })
  @JoinColumn({ name: 'service_id' })
  service!: Service;

  @Column({ name: 'service_id', type: 'uuid' })
  serviceId!: string;

  @Column({ name: 'is_default', default: false })
  isDefault!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
