import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Users,
  AccountStatus,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersAccountStatusController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/account-status', {
    responses: {
      '200': {
        description: 'Users has one AccountStatus',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AccountStatus),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<AccountStatus>,
  ): Promise<AccountStatus> {
    return this.usersRepository.accountStatusUser(id).get(filter);
  }

  @post('/users/{id}/account-status', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(AccountStatus)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountStatus, {
            title: 'NewAccountStatusInUsers',
            exclude: ['id'],
            optional: ['id']
          }),
        },
      },
    }) accountStatus: Omit<AccountStatus, 'id'>,
  ): Promise<AccountStatus> {
    return this.usersRepository.accountStatusUser(id).create(accountStatus);
  }

  @patch('/users/{id}/account-status', {
    responses: {
      '200': {
        description: 'Users.AccountStatus PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountStatus, {partial: true}),
        },
      },
    })
    accountStatus: Partial<AccountStatus>,
    @param.query.object('where', getWhereSchemaFor(AccountStatus)) where?: Where<AccountStatus>,
  ): Promise<Count> {
    return this.usersRepository.accountStatusUser(id).patch(accountStatus, where);
  }

  @del('/users/{id}/account-status', {
    responses: {
      '200': {
        description: 'Users.AccountStatus DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AccountStatus)) where?: Where<AccountStatus>,
  ): Promise<Count> {
    return this.usersRepository.accountStatusUser(id).delete(where);
  }
}
