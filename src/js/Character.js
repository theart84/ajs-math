export default class Character {
  constructor(name, type) {
    if (!(name.length >= 2 && name.length <= 10)) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Передайте допустимый тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
