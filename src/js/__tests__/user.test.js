import Character from '../Character';
import Team from '../Team';

test('Проверка на добавление нового игрока', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Ivan', age: 20 });

  newTeam.add(player);

  const newSet = new Set();
  newSet.add({ name: 'Ivan', age: 20 });

  expect(newTeam.participant).toEqual(newSet);
});

test('Проверка на добавление cуществующего игрока', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Ivan', age: 20 });

  newTeam.add(player);

  expect(() => {
    newTeam.add(player);
  }).toThrowError('Данный игрок уже есть в команде.');
});

test('Проверка на отсутсвие дубликатов при добавлении новых игроков', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Ivan', age: 20 });
  const player1 = new Character({ name: 'Oleg', age: 25 });
  const player2 = new Character({ name: 'Denis', age: 30 });

  newTeam.addAll(player, player1, player2, player2);

  expect(newTeam.participant.size).toEqual(3);
});

test('Проверка на преобразование Set в массив', () => {
  const newTeam = new Team();

  const player = new Character({ name: 'Ivan', age: 20 });
  const player1 = new Character({ name: 'Oleg', age: 25 });
  const player2 = new Character({ name: 'Denis', age: 30 });

  newTeam.addAll(player, player1, player2);

  newTeam.toArray();

  const sample = [
    { age: 20, name: 'Ivan' },
    { age: 25, name: 'Oleg' },
    { age: 30, name: 'Denis' },
  ];

  expect(newTeam.participant).toEqual(sample);
});
