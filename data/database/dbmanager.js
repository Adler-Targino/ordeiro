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
          category INTEGER, 
          timePast INTEGER, 
          timeGoal INTEGER
        );`
      );

      console.log('Banco de dados e tabela criados ou já existem');
    } catch (error) {
      console.error('Erro ao criar banco ou tabela', error);
    }
  }

  // Método para retornar o banco de dados, caso precise usá-lo fora
  getDatabase() {
    return this.db;
  }
}

export default new DbManager();