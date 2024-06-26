import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class AccountStatus extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AccountStatus>) {
    super(data);
  }
}

export interface AccountStatusRelations {
  // describe navigational properties here
}

export type AccountStatusWithRelations = AccountStatus & AccountStatusRelations;
