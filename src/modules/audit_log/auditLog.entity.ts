import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { User } from '@/modules/user/user.entity';

export enum ActorType {
  USER = 'user',
  SYSTEM = 'system',
  INTEGRATION = 'integration'
}

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant, { nullable: true })
  @JoinColumn({ name: 'tenant_id' })
  tenant?: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id', nullable: true })
  tenantId?: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column({ type: 'uuid', name: 'user_id', nullable: true })
  userId?: string;

  @Column({
    type: 'enum',
    enum: ActorType,
    default: ActorType.SYSTEM
  })
  actorType!: ActorType;

  @Column({ type: 'text', name: 'action_text' })
  actionText!: string;

  @Column({ type: 'text', name: 'resource_type' })
  resourceType!: string;

  @Column({ type: 'uuid', name: 'resource_id', nullable: true })
  resourceId?: string;

  @Column({ type: 'jsonb', nullable: true })
  payload?: Record<string, any>;

  @Column({ type: 'text', nullable: true })
  ip?: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;
}
