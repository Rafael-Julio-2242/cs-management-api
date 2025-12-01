import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Tenant } from '../../../modules/tenancy/tenant.entity';
import { AttendanceMessage } from '../attendanceMessage.entity';

@Entity('message_attachments')
export class MessageAttachment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id' })
  tenantId!: string;

  @Column({ type: 'text' })
  url!: string;

  @Column({ type: 'int' })
  size!: number;

  @Column({ type: 'text', name: 'provider_file_id' })
  providerFileId!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @OneToOne(() => AttendanceMessage, message => message.attachment)
  message!: AttendanceMessage;
}