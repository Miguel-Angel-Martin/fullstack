import {Entity, model, property, hasOne} from '@loopback/repository';
import {AccountStatus} from './account-status.model';

@model({settings: {strict: true}})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    index: {
      unique: true,
    },
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    index: {
      unique: true,
    }
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  passwordHash: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'date',
  })
  dateOfBirth?: string;

  @property({
    type: 'number',
    required: true,
  })
  genderId: number;

  @property({
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    type: 'string',
  })
  profilePictureUrl?: string;

  @property({
    type: 'date',
    required: true,
  })
  registrationDate: string;

  @property({
    type: 'date',
    required: true,
  })
  lastLoginDate: string;

  @property({
    type: 'number',
    required: true,
  })
  roleId: number;

  @property({
    type: 'number',
    required: true,
  })
  accountStatusId: number;

  @hasOne(() => AccountStatus, {keyTo: 'id'})
  accountStatusUser: AccountStatus;
  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
