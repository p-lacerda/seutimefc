import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Clubs from '../database/models/Clubs';
import { CLUBS, CLUBS_ID } from './mock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


describe("Testa o retorno da rota /clubs", () => {
  let chaiResponse: Response;

  before(async () => {
    sinon
      .stub(Clubs, "findAll")
      .resolves(CLUBS as any);
  });

  after(()=>{
    (Clubs.findAll as sinon.SinonStub).restore();
  })

  it('should return http status 200', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/clubs')
       .send({
       })

    expect(chaiResponse).to.have.status(200);
  });

  it('should return an array of clubs', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/clubs')
       .send({
       })

    expect(chaiResponse.body).to.be.deep.equal(CLUBS);
  });
});

describe("Testa o retorno da rota /clubs/:id", () => {
  let chaiResponse: Response;

  before(async () => {
    sinon
      .stub(Clubs, "findOne")
      .resolves(CLUBS_ID as any);
  });

  after(()=>{
    (Clubs.findOne as sinon.SinonStub).restore();
  })

  it('should return http status 200', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/clubs/5')
       .send({
       })

    expect(chaiResponse).to.have.status(200);
  });

  it('should return an unique club', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/clubs/5')
       .send({
       })

    expect(chaiResponse.body).to.be.deep.equal(CLUBS_ID);
  });
});