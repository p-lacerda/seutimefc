import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
import { ADMIN_USER } from './mock';
// import { createLogin } from '../database/controllers/LoginController';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a criação de um novo login no model Users com o Controller createLogin', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */
  let chaiResponse: Response;

  before(async () => {
    sinon
      .stub(Users, "findOne")
      .resolves(ADMIN_USER as any);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('should return http status request 200', async () => {
    chaiResponse = await chai
       .request(app)
       .post('/login')
       .send({
          email: ADMIN_USER.email,
          password: ADMIN_USER.password,
       })

    expect(chaiResponse).to.have.status(200);
  });

  it('should return the correct user', async () => {
    chaiResponse = await chai
       .request(app)
       .post('/login')
       .send({
          email: ADMIN_USER.email,
          password: ADMIN_USER.password,
       })

    expect(chaiResponse.body.users).to.have.property('email').to.contains(ADMIN_USER.email);
  });

  it('should return httpStatus 401 if email is empty', async () => {
    chaiResponse = await chai
       .request(app)
       .post('/login')
       .send({
          password: ADMIN_USER.password,
       })

    expect(chaiResponse).to.have.status(401);
  });
});
