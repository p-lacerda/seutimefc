import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
// import { createLogin } from '../database/controllers/LoginController';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a criação de um novo login no model Users com o Controller createLogin', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */
  let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Users, "create")
  //     .resolves({
  //       Users<Seu mock>
  //     } as Users);
  // });

  after(()=>{
    (Users.create as sinon.SinonStub).restore();
  })

  it('should return http status request 200', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/login')

    expect(chaiHttpResponse).to.be.eq('200');
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
