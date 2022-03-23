import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matchs from '../database/models/Matchs';
import { MATCHS } from './mock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


describe("Testa o retorno da rota /matches", () => {
  let chaiResponse: Response;

  before(async () => {
    sinon
      .stub(Matchs, "findAll")
      .resolves(MATCHS as any);
  });

  after(()=>{
    (Matchs.findAll as sinon.SinonStub).restore();
  })

  it('should return http status 200', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/matchs/')
       .send({
       })

    expect(chaiResponse).to.have.status(200);
  });

  it('should return an array of objects', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/matchs/')
       .send({
       })

    expect(chaiResponse.body).to.be.an('array');
  });
  
  it('should contain objects with the right keys', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/matchs/')
       .send({
       })

    expect(chaiResponse.body[0]).to.have.an.param('id');
    expect(chaiResponse.body[0]).to.have.an.param('homeTeam');
    expect(chaiResponse.body[0]).to.have.an.param('homeTeamGoals');
    expect(chaiResponse.body[0]).to.have.an.param('awayTeam');
    expect(chaiResponse.body[0]).to.have.an.param('awayTeamGoals');
    expect(chaiResponse.body[0]).to.have.an.param('inProgress');
    expect(chaiResponse.body[0]).to.have.an.param('homeClub');
    expect(chaiResponse.body[0]).to.have.an.param('awayClub');
  });
});

describe("Testa o retorno da rota /matches?inProgress", () => {
  let chaiResponse: Response;

  before(async () => {
    sinon
      .stub(Matchs, "findAll")
      .resolves(MATCHS as any);
  });

  after(()=>{
    (Matchs.findAll as sinon.SinonStub).restore();
  })

  it('should return http status 200', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/matchs?inProgress=true')
       .send({
       })

    expect(chaiResponse).to.have.status(200);
  });

  it('should contain inProgress equals true', async () => {
    chaiResponse = await chai
       .request(app)
       .get('/matchs?inProgress=true')
       .send({
       })

    expect(chaiResponse.body[0]).to.have.an.param('inProgress').to.contains(true);
  });
});