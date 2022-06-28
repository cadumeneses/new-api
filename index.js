const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { request } = require('http');
const { response } = require('express');
const app = express();


var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server Started!');
});

app.route('/projects').get((request, response) => {
  response.send(PROJECT);
});

app.route('/projects').post((request, response) => {
  let project = request.body;

  const firstId = PROJECT ? Math.max.apply(null, PROJECT.map(projectIterator => projectIterator.id)) + 1 : 1;
  project.id = firstId;
  PROJECT.push(project);


  response.status(201).send(project);
});

app.route('/projects/:id').put((request, response) => {
  const projectId = +request.params['id'];
  const project = request.body;

  const index = PROJECT.findIndex(projectIterator => projectIterator.id === projectId);
  PROJECT[index] = project;

  response.status(200).send(project);
});

app.route('/projects/:id').get((request, response) => {
  const projectId = +request.params['id'];

  response.status(200).send(PROJECT.find(projectIterator => projectIterator.id === projectId));
});

app.route('/projects/:id').delete((request, response) => {
  const projectId = +request.params['id'];
  PROJECT = PROJECT.filter(projectIterator => projectIterator.id !== projectId);

  response.status(204).send({});
});


//teams
app.route('/teams').get((request, response) => {
  response.send(TEAMS);
});

app.route('/teams').post((request, response) => {
  let team = request.body;

  const firstId = TEAMS ? Math.max.apply(null, TEAMS.map(teamIterator => teamIterator.id)) + 1 : 1;
  team.id = firstId;
  TEAMS.push(team);


  response.status(201).send(team);
});

app.route('/teams/:id').put((request, response) => {
  const teamId = +request.params['id'];
  const team = request.body;

  const index = PROJECTS.findIndex(teamIterator => teamIterator.id === teamId);
  TEAMS[index] = team;

  response.status(200).send(team);
});

app.route('/teams/:id').get((request, response) => {
  const teamId = +request.params['id'];

  response.status(200).send(TEAMS.find(teamIterator => teamIterator.id === teamId));
});

app.route('/teams/:id').delete((request, response) => {
  const teamId = +request.params['id'];
  TEAM = TEAMS.filter(teamIterator => teamIterator.id !== teamId);

  response.status(204).send({});
});

var PROJECT = [
  {
    id: 1,
    name: 'Teste',
    TEAMS: [''],
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'
  },
  {
    id: 2,
    name: 'segundo',
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'
  },
  {
    id: 3,
    name: 'tre',
    status: 'concluido',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'
  },
  {
    id: 4,
    name: 'front',
    TEAMS: [''],
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'
  },
  {
    id: 5,
    name: 'back',
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 6,
    name: 'database',
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 7,
    name: 'TI',
    TEAMS: [''],
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 8,
    name: 'angular',
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 9,
    name: 'golang',
    status: 'Em andamento',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 10,
    name: 'junior',
    TEAMS: [''],
    status: 'concluido',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 11,
    name: 'pleno',
    status: 'concluido',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  },
  {
    id: 12,
    name: 'senior',
    status: 'concluido',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.'

  }
]

var TEAMS = [
  {
    id: 1,
    name: 'One Piece',
    members: ['Carlos', 'Victor', 'Gaby'],
    project_id: 1
  },
  {
    id: 1,
    name: 'Naruto',
    members: ['Pedro', 'Lucas', 'Maria'],
    project_id: 1
  },
  {
    id: 1,
    name: 'Barbie',
    members: ['Clara', 'Wannubia', 'Kelly'],
    project_id: 1
  }
]