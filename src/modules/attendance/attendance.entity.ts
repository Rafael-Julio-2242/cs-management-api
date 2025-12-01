import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AttendanceTag } from '@/modules/attendance_tag/attendanceTag.entity';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { User } from '@/modules/user/user.entity';
import { Contact } from '@/modules/contact/contact.entity';
import { Service } from '@/modules/service/service.entity';
import { Account } from '@/modules/account/account.entity';
import { ServiceChannel } from '@/modules/service_channel/serviceChannel.entity';
import { AttendanceMessage } from '../attendance_message/attendanceMessage.entity';

export enum AttendanceStatus {
  AWAITING_SERVICE = 'awaiting service',
  IN_PROGRESS = 'in progress',
  AUTOMATED = 'automated',
  COMPLETED = 'completed'
}

@Entity('attendances')
export class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id' })
  tenantId!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'attendant_id' })
  attendant?: User;

  @Column({ type: 'uuid', name: 'attendant_id', nullable: true })
  attendantId?: string;

  @ManyToOne(() => Contact, { nullable: true })
  @JoinColumn({ name: 'contact_id' })
  contact?: Contact;

  @Column({ type: 'uuid', name: 'contact_id', nullable: true })
  contactId?: string;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  service!: Service;

  @Column({ type: 'uuid', name: 'service_id' })
  serviceId!: string;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id' })
  account!: Account;

  @Column({ type: 'uuid', name: 'account_id' })
  accountId!: string;

  @ManyToOne(() => ServiceChannel)
  @JoinColumn({ name: 'channel_id' })
  channel!: ServiceChannel;

  @Column({ type: 'uuid', name: 'channel_id' })
  channelId!: string;

  @Column({ type: 'text' })
  protocolo!: string;

  @Column({ type: 'timestamp', name: 'entry_time' })
  entryTime!: Date;

  @Column({ type: 'timestamp', name: 'finish_time', nullable: true })
  finishTime?: Date;

  @Column({
    type: 'enum',
    enum: AttendanceStatus,
    default: AttendanceStatus.AWAITING_SERVICE
  })
  status!: AttendanceStatus;

  @Column({ type: 'timestamp', name: 'last_message_at', nullable: true })
  lastMessageAt?: Date;

  @Column({ type: 'int', default: 0 })
  priority!: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @OneToMany(() => AttendanceTag, attendanceTag => attendanceTag.attendance)
  tags!: AttendanceTag[];

  @OneToMany(() => AttendanceMessage, message => message.attendance)
  messages!: AttendanceMessage[];
}
