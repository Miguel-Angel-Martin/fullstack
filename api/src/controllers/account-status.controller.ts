import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {AccountStatus} from '../models';
import {AccountStatusRepository} from '../repositories';

export class AccountStatusController {
  constructor(
    @repository(AccountStatusRepository)
    public accountStatusRepository : AccountStatusRepository,
  ) {}

  @post('/account-statuses')
  @response(200, {
    description: 'AccountStatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(AccountStatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountStatus, {
            title: 'NewAccountStatus',
            exclude: ['id'],
          }),
        },
      },
    })
    accountStatus: Omit<AccountStatus, 'id'>,
  ): Promise<AccountStatus> {
    return this.accountStatusRepository.create(accountStatus);
  }

  @get('/account-statuses/count')
  @response(200, {
    description: 'AccountStatus model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AccountStatus) where?: Where<AccountStatus>,
  ): Promise<Count> {
    return this.accountStatusRepository.count(where);
  }

  @get('/account-statuses')
  @response(200, {
    description: 'Array of AccountStatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AccountStatus, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AccountStatus) filter?: Filter<AccountStatus>,
  ): Promise<AccountStatus[]> {
    return this.accountStatusRepository.find(filter);
  }

  @patch('/account-statuses')
  @response(200, {
    description: 'AccountStatus PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountStatus, {partial: true}),
        },
      },
    })
    accountStatus: AccountStatus,
    @param.where(AccountStatus) where?: Where<AccountStatus>,
  ): Promise<Count> {
    return this.accountStatusRepository.updateAll(accountStatus, where);
  }

  @get('/account-statuses/{id}')
  @response(200, {
    description: 'AccountStatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AccountStatus, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AccountStatus, {exclude: 'where'}) filter?: FilterExcludingWhere<AccountStatus>
  ): Promise<AccountStatus> {
    return this.accountStatusRepository.findById(id, filter);
  }

  @patch('/account-statuses/{id}')
  @response(204, {
    description: 'AccountStatus PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountStatus, {partial: true}),
        },
      },
    })
    accountStatus: AccountStatus,
  ): Promise<void> {
    await this.accountStatusRepository.updateById(id, accountStatus);
  }

  @put('/account-statuses/{id}')
  @response(204, {
    description: 'AccountStatus PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() accountStatus: AccountStatus,
  ): Promise<void> {
    await this.accountStatusRepository.replaceById(id, accountStatus);
  }

  @del('/account-statuses/{id}')
  @response(204, {
    description: 'AccountStatus DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.accountStatusRepository.deleteById(id);
  }
}
