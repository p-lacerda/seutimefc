import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
import { CORRECT_ADMIN_USER, ADMIN_USER, WRONG_ADMIN_USER } from './mock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a criação de um novo login na rota /login', () => {
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
          email: CORRECT_ADMIN_USER.email,
          password: CORRECT_ADMIN_USER.password,
       })

    expect(chaiResponse).to.have.status(200);
  });

  it('should return the correct user', async () => {
    chaiResponse = await chai
       .request(app)
       .post('/login')
       .send({
          email: CORRECT_ADMIN_USER.email,
          password: CORRECT_ADMIN_USER.password,
       })

    expect(chaiResponse.body.user).to.have.property('email').to.contains(ADMIN_USER.email);
  });

  it('should return httpStatus 401 if email is empty', async () => {
    chaiResponse = await chai
       .request(app)
       .post('/login')
       .send({
          password: CORRECT_ADMIN_USER.password,
       })

    expect(chaiResponse).to.have.status(401);
  });

  it('should not return the password', async () => {
    chaiResponse = await chai
    .request(app)
    .post('/login')
    .send({
       email: CORRECT_ADMIN_USER.email,
       password: CORRECT_ADMIN_USER.password,
    })

    expect(chaiResponse.body.user).to.not.have.property('password');
  });

  it('should return httpStatus 401 if password is wrong', async () => {
    chaiResponse = await chai
    .request(app)
    .post('/login')
    .send({
       email: WRONG_ADMIN_USER.email,
       password: WRONG_ADMIN_USER.password,
    })

    expect(chaiResponse).to.have.status(401);
  });
});

describe('Testa a validação de um usuário na rota /login/validate', () => {
  let chaiResponse: Response;

  before(async () => {
    sinon
      .stub(Users, "findOne")
      .resolves(ADMIN_USER as any);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('should return user role in the /login', async () => {
    chaiResponse = await chai
       .request(app)
       .post('/login')
       .send({
          email: CORRECT_ADMIN_USER.email,
          password: CORRECT_ADMIN_USER.password,
       })

    expect(chaiResponse.body.user).to.have.property('role').to.be.eq('admin');
  });

  it('should return user role in the /login/validate', async () => {
    const login = await chai
      .request(app)
      .post('/login')
      .send({
        email: CORRECT_ADMIN_USER.email,
        password: CORRECT_ADMIN_USER.password,
      })

      const chaiResponse = await chai
        .request(app)
        .get('/login/validate')
        .set('Authorization', login.body.token);

        expect(chaiResponse.body).to.be.eq('admin');
  });
});
