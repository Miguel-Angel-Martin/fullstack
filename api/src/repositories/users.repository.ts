import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Users, UsersRelations, AccountStatus} from '../models';
import {AccountStatusRepository} from './account-status.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly accountStatusUser: HasOneRepositoryFactory<AccountStatus, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.ds') dataSource: DsDataSource, @repository.getter('AccountStatusRepository') protected accountStatusRepositoryGetter: Getter<AccountStatusRepository>,
  ) {
    super(Users, dataSource);
    this.accountStatusUser = this.createHasOneRepositoryFactoryFor('accountStatusUser', accountStatusRepositoryGetter);
  }
}
