export const ADMIN_USER = {
    id: 1,
    username: "Admin",
    role: "admin",
    email: "admin@admin.com",
    password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
}

export const CORRECT_ADMIN_USER = {
  email: "admin@admin.com",
  password: "secret_admin",
}

export const WRONG_ADMIN_USER = {
  email: "hacker@hacker.com",
  password: "secret_hacker",
}

export const CLUBS = 
  [
    {
      "id": 1,
      "clubName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "clubName": "Bahia"
    },
    {
      "id": 3,
      "clubName": "Botafogo"
    },
  ]

export const CLUBS_ID = {
	"id": 5,
	"clubName": "Cruzeiro"
}

export const MATCHS = 
  [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeClub": {
        "clubName": "São Paulo"
      },
      "awayClub": {
        "clubName": "Grêmio"
      }
    },
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeClub": {
        "clubName": "São Paulo"
      },
      "awayClub": {
        "clubName": "Internacional"
      }
    }
  ];