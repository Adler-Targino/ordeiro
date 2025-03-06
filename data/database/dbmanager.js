import * as SQLite from 'expo-sqlite';

class DbManager {
  constructor() {
    this.db = null;
  }

  // Método para abrir o banco de dados e criar a tabela
  async init() {
    try {
      // Abre o banco de dados ou cria se não existir
      this.db = await SQLite.openDatabaseAsync('ordeiro.db');

      // Cria a tabela timer se não existir
      await this.db.execAsync(
        `CREATE TABLE IF NOT EXISTS timer (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date TEXT, 
          title TEXT, 
          category TEXT, 
          timePast INTEGER, 
          timeGoal INTEGER
        );`
      );
    } catch (error) {
      console.error('Erro ao criar banco ou tabela', error);
    }
  }

  async addTimer(date, title, category, timeGoal) {
    try {

      const result = await this.db.runAsync(
        `INSERT INTO timer (date, title, category, timeGoal) 
        VALUES (?,?,?,?);`, date, title, category, timeGoal
      );

      console.log(result.lastInsertRowId, result.changes);
    } catch (error) {
      console.error('addTimer', error);
    }
  }

  // Método para retornar o banco de dados, caso precise usá-lo fora
  getDatabase() {
    return this.db;
  }
}

export default new DbManager();