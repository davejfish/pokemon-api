const pool = require('../utils/pool');


module.exports = class Attacks {
  id;
  atk_name;
  atk_type;

  constructor(row) {
    this.id = row.id;
    this.atk_name = row.atk_name;
    this.atk_type = row.atk_type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM attacks;');
    return rows.map((row) => new Attacks(row));
  }

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM attacks WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Attacks(rows[0]);
  }
};
