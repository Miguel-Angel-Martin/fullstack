import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Gender, GenderRelations} from '../models';

export class GenderRepository extends DefaultCrudRepository<
  Gender,
  typeof Gender.prototype.id,
  GenderRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Gender, dataSource);
  }
}
