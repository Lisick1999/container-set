export default class Team {
  constructor() {
    this.participant = new Set();
  }

  add(player) {
    if (this.participant.has(player)) {
      throw new Error('Данный игрок уже есть в команде.');
    } else {
      this.participant.add(player);
    }
  }

  addAll(...players) {
    players.forEach((player) => {
      this.participant.add(player);
    });
  }

  toArray() {
    this.participant = Array.from(this.participant);
  }
}
