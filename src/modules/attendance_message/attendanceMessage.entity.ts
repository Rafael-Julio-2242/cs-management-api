import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity';
import { Tenant } from '../tenancy/tenant.entity';
import { ServiceChannel } from '../service_channel/serviceChannel.entity';
import { MessageAttachment } from './message_attachment/messageAttachment.entity';

@Entity('attendance_messages')
export class AttendanceMessage {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id' })
  tenantId!: string;

  @ManyToOne(() => Attendance, attendance => attendance.messages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'attendance_id' })
  attendance!: Attendance;

  @Column({ type: 'uuid', name: 'attendance_id' })
  attendanceId!: string;

  @ManyToOne(() => ServiceChannel)
  @JoinColumn({ name: 'service_channel_id' })
  serviceChannel!: ServiceChannel;

  @Column({ type: 'uuid', name: 'service_channel_id' })
  serviceChannelId!: string;

  @Column({ type: 'varchar', length: 50, name: 'sender_type' })
  senderType!: 'contact' | 'agent';

  @Column({ type: 'uuid', name: 'sender_id' })
  senderId!: string;

  @Column({ type: 'text', name: 'sender_name' })
  senderName!: string;

  @Column({ type: 'timestamp', name: 'sended_at' })
  sendedAt!: Date;

  @Column({ type: 'text' })
  message!: string;

  @Column({ type: 'varchar', length: 20, name: 'message_type' })
  messageType!: 'text' | 'image' | 'location' | 'audio';

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @OneToOne(() => MessageAttachment, { nullable: true })
  @JoinColumn({ name: 'message_attachment_id' })
  attachment?: MessageAttachment;

  @Column({ type: 'uuid', name: 'message_attachment_id', nullable: true })
  messageAttachmentId?: string;
}
