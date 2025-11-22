import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tenant } from '@/modules/tenancy/tenant.entity';
import { AttendanceTag } from '@/modules/attendance_tag/attendanceTag.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant)
  @JoinColumn({ name: 'tenant_id' })
  tenant!: Tenant;

  @Column({ type: 'uuid', name: 'tenant_id' })
  tenantId!: string;

  @Column({ type: 'text' })
  name!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @OneToMany(() => AttendanceTag, attendanceTag => attendanceTag.tag)
  attendances!: AttendanceTag[];
}
