import Team from './Team';
import Character from './Character';

const newTeam = new Team();

const player = new Character({ name: 'Ivan', age: 20 });
const player1 = new Character({ name: 'Oleg', age: 25 });
const player2 = new Character({ name: 'Denis', age: 30 });

newTeam.addAll(player, player1, player2, player2);
