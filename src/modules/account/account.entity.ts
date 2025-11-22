import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { AccountService } from '@/modules/account_service/accountService.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant, { nullable: false })
  @JoinColumn({ name: 'tenantId' })
  tenant!: Tenant;

  @Column({ type: 'uuid' })
  tenantId!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ name: 'is_active', default: true })
  active!: boolean;

  @OneToMany(() => AccountService, accountService => accountService.account)
  accountServices!: AccountService[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
