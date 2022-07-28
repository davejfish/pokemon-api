const pool = require('../utils/pool');


module.exports = class Pokemon {
  id;
  name;
  type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM pokemon;');
    return rows.map((row) => new Pokemon(row));
  }

  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM pokemon WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Pokemon(rows[0]);
  }

  static async getPokemonAttacks(id) {
    const { rows } = await pool.query(`
      SELECT pokemon.name, attacks.atk_name
      FROM attacks_to_pokemon
      JOIN pokemon ON (attacks_to_pokemon.poke_id = pokemon.id)
      JOIN attacks ON (attacks_to_pokemon.atk_id = attacks.id)
      WHERE poke_id=$1`, [id]);
    return rows;
  }
};
