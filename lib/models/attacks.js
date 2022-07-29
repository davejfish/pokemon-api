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

  static async getPokemonWithAttack(id) {
    const { rows } = await pool.query(`
        SELECT pokemon.name, attacks.atk_name
        FROM attacks_to_pokemon
        JOIN pokemon ON (attacks_to_pokemon.poke_id = pokemon.id)
        JOIN attacks ON (attacks_to_pokemon.atk_id = attacks.id)
        WHERE atk_id=$1`, [id]
    );
    return rows;
  }
};
