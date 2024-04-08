import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {AccountStatus, AccountStatusRelations} from '../models';

export class AccountStatusRepository extends DefaultCrudRepository<
  AccountStatus,
  typeof AccountStatus.prototype.id,
  AccountStatusRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(AccountStatus, dataSource);
  }
}
