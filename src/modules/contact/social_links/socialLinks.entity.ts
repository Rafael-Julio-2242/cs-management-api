import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from '@/modules/contact/contact.entity';
import { Tenant } from '@/modules/tenancy/tenant.entity';

export type SocialLinkType = 'LinkedIn' | 'Facebook' | 'Instagram' | 'Twitter' | 'Github';

@Entity('social_links')
export class SocialLink {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Tenant, { nullable: false })
  @JoinColumn({ name: 'tenantId' })
  tenant!: Tenant;

  @Column({ type: 'uuid' })
  tenantId!: string;

  @ManyToOne(() => Contact, contact => contact.socialLinks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'contactId' })
  contact!: Contact;

  @Column({ type: 'uuid' })
  contactId!: string;

  @Column({ type: 'varchar', length: 50 })
  type!: SocialLinkType;

  @Column({ type: 'text' })
  url!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
