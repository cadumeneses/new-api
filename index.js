const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { request } = require('http');
const { response } = require('express');

const port = process.env.PORT || 3000;
const host =  '0.0.0.0'; 

const app = express();


var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(port, host, () => {
  console.log(`Server start in host ${host} on port ${port}`);
});

app.route('/projects').get((request, response) => {
  response.send(PROJECT);
});

app.route('/projects').post((request, response) => {
  let project = request.body;

  if (project.name < 1) {
    response.status(403).json({ 'mensagem': 'Não foi possivel cadastrar o projeto devido a um error' })
  }
  if (project.description < 1) {
    response.status(403).json({ 'mensagem': 'Não foi possivel cadastrar o projeto devido a um error' })
  }

  const firstId = PROJECT ? Math.max.apply(null, PROJECT.map(projectIterator => projectIterator.id)) + 1 : 1;
  project.id = firstId;
  PROJECT.push(project);
  response.status(201).send(project).json({ 'mensagem': 'Projeto cadastrado com sucesso!' });
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
  response.send(TEAM);
});

app.route('/teams').post((request, response) => {
  let team = request.body;

  const firstId = TEAM ? Math.max.apply(null, TEAM.map(teamIterator => teamIterator.id)) + 1 : 1;
  team.id = firstId;
  TEAM.push(team);


  response.status(201).send(team);
});

app.route('/teams/:id').put((request, response) => {
  const teamId = +request.params['id'];
  const team = request.body;

  const index = TEAM.findIndex(teamIterator => teamIterator.id === teamId);
  TEAM[index] = team;

  response.status(200).send(team);
});

app.route('/teams/:id').get((request, response) => {
  const teamId = +request.params['id'];

  response.status(200).send(TEAM.find(teamIterator => teamIterator.id === teamId));
});

app.route('/teams/:id').delete((request, response) => {
  const teamId = +request.params['id'];
  TEAM = TEAM.filter(teamIterator => teamIterator.id !== teamId);

  response.status(204).send({});
});

var PROJECT = [
  {
    id: 1,
    name: 'teste',
    team:'one piece' ,
    status: false,
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.',
    tasks: [
      {
        nameTask: '',
        member: '',
        dateInit: '',
        dateEnd: ''
      }
    ]
  },
  {
    id: 2,
    name: 'criacao de site',
    team: 'naruto',
    status: false,
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.',
    tasks: [
      {
        nameTask: '',
        member: '',
        dateInit: '',
        dateEnd: ''
      }
    ]
  },
  {
    id: 3,
    name: 'teste 02',
    team: 'barbie',
    status: 'em andamento',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.',
    tasks: [
      {
        nameTask: '',
        member: '',
        dateInit: '',
        dateEnd: ''
      }
    ]
  },
  {
    id: 4,
    name: 'teste 03',
    team:'barba branca' ,
    status: false,
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.',
    tasks: [
      {
        nameTask: '',
        member: '',
        dateInit: '',
        dateEnd: ''
      }
    ]
  },
  {
    id: 5,
    name: 'criacao de site 02',
    team: 'senai',
    status: false,
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.',
    tasks: [
      {
        nameTask: '',
        member: '',
        dateInit: '',
        dateEnd: ''
      }
    ]
  },
  {
    id: 6,
    name: 'teste 04',
    team: 'crato',
    status: 'em andamento',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero neque molestiae sed sunt eos dolorum voluptate tempore. Praesentium voluptate fugit architecto distinctio similique veniam dolor dolores et asperiores deserunt.',
    tasks: [
      {
        nameTask: '',
        member: '',
        dateInit: '',
        dateEnd: ''
      }
    ]
  },
]

var TEAM = [
  {
    id: 1,
    name: 'one piece',
    members: [
      {
        nameMember: 'Carlos'
      },
      {
        nameMember: 'luiza'
      },
      {
        nameMember: 'raquel'
      },
      {
        nameMember: 'kamily'
      },
    ]
  },
  {
    id: 2,
    name: 'naruto',
    members: [
      {
        nameMember: 'pedro'
      },
      {
        nameMember: 'riquelme'
      },
      {
        nameMember: 'zidane'
      },
      {
        nameMember: 'cristiano'
      },
    ]
  },
  {
    id: 3,
    name: 'barbie',
    members: [
      {
        nameMember: 'ronaldo fenomeno'
      },
      {
        nameMember: 'lufy'
      },
      {
        nameMember: 'angie'
      },
    ]
  },
  {
    id: 4,
    name: 'barba branca',
    members: [
      {
        nameMember: 'caio'
      },
      {
        nameMember: 'anabelle'
      },
      {
        nameMember: 'andre'
      },
      {
        nameMember: 'luiza sonza'
      },
    ]
  },
  {
    id: 5,
    name: 'senai',
    members: [
      {
        nameMember: 'gepeto'
      },
      {
        nameMember: 'gaby'
      },
      {
        nameMember: 'flavo'
      },
      {
        nameMember: 'kaio'
      },
    ]
  },
  {
    id: 6,
    name: 'crato',
    members: [
      {
        nameMember: 'guilerme'
      },
      {
        nameMember: 'monaliza'
      },
      {
        nameMember: 'amanda'
      },
      {
        nameMember: 'lara'
      },
      {
        nameMember: 'pedrinho'
      },
      {
        nameMember: 'maria'
      },
      {
        nameMember: 'julliana'
      },
      {
        nameMember: 'angel'
      },
    ]
  }
]