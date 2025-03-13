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

      console.log('Init: Banco iniciado');
    } catch (error) {
      console.error('Erro ao criar banco ou tabela', error);
    }
  }

  async addTimer(date, title, category, timeGoal) {
    try {

      const result = await this.db.runAsync(
        `INSERT INTO timer (date, title, category, timeGoal) 
        VALUES (?,?,?,?);`, [date, title, category, timeGoal]
      );
      console.log(date, title, category, timeGoal);

    } catch (error) {
      console.error('addTimer:', error);
    }
  }

  async updateTimer(id, timePast) {
    try {
      const result = await this.db.runAsync(
        `UPDATE timer SET timePast = ? WHERE id = ?`, [timePast, id]
      );
    } catch (error) {
      console.error('updateTimer:', error);
    }
  }

  async listTimers(date){
    try {
      const result = await this.db.getAllAsync('SELECT * FROM timer')
      
      for(const r of result){
        console.log(r.id, r.date, r.title, r.category, r.timeGoal);
      }
      
      return result || [];
    } catch (error){
      console.error('listTimers:', error)
    }
  }
  
  async truncateTable() {
    try {
        await this.db.runAsync('DELETE FROM timer;');
        await this.db.runAsync("DELETE FROM sqlite_sequence WHERE name='timer';");
        console.log('Tabela truncada com sucesso!');
    } catch (error) {
        console.error('Erro ao truncar a tabela:', error);
    }
}

  // Método para retornar o banco de dados, caso precise usá-lo fora
  getDatabase() {
    return this.db;
  }
}

export default new DbManager();