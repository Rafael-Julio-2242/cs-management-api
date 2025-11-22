import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Plan } from '@/modules/plan/plan.entity';
import { User } from '@/modules/user/user.entity';

export enum TenantStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  PAYMENT_PENDING = 'payment_pending',
  CANCELLED = 'cancelled',
}

@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'uuid' })
  planId!: string;

  @ManyToOne(() => Plan)
  @JoinColumn({ name: 'planId' })
  plan!: Plan;

  @Column({
    type: 'enum',
    enum: TenantStatus,
    default: TenantStatus.ACTIVE,
  })
  status!: TenantStatus;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt!: Date | null;

  @OneToMany(() => User, (user) => user.tenant)
  users!: User[];
}
