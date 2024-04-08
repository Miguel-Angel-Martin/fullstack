import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Gender extends Entity {
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
  gender: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Gender>) {
    super(data);
  }
}

export interface GenderRelations {
  // describe navigational properties here
}

export type GenderWithRelations = Gender & GenderRelations;
