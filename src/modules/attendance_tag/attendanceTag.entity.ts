import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { Attendance } from '@/modules/attendance/attendance.entity';
import { Tag } from '@/modules/tag/tag.entity';

@Entity('attendance_tags')
export class AttendanceTag {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id' })
  tenantId!: string;

  @ManyToOne(() => Attendance, attendance => attendance.tags)
  @JoinColumn({ name: 'attendance_id' })
  attendance!: Attendance;

  @Column({ type: 'uuid', name: 'attendance_id' })
  attendanceId!: string;

  @ManyToOne(() => Tag, tag => tag.attendances)
  @JoinColumn({ name: 'tag_id' })
  tag!: Tag;

  @Column({ type: 'uuid', name: 'tag_id' })
  tagId!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;
}
