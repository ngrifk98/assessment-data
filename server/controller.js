require('dotenv').config();
const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS cities;
        DROP TABLE IF EXISTS countries;

        CREATE TABLE countries (
          country_id SERIAL PRIMARY KEY,
          name VARCHAR
        );

        CREATE TABLE cities (
          city_id SERIAL PRIMARY KEY,
          name VARCHAR,
          rating INTEGER,
          country_id INTEGER REFERENCES countries(country_id)
        );

        INSERT INTO countries (name)
        VALUES ('Afghanistan'),
          ('Albania'),
          ('Algeria');

        INSERT INTO cities (name, rating, country_id)
        VALUES
          ('City A', 5, 1),
          ('City B', 8, 2),
          ('City C', 7, 3);
          
      `).then(() => {
                console.log('DB seeded!')
                res.sendStatus(200)
            }).catch(err => console.log('error seeding DB', err))
        },
    
        getCountries: (req, res) => {
            sequelize
              .query('SELECT * FROM countries')
              .then((dbRes) => {
                res.status(200).send(dbRes[0]);
              })
              .catch((err) => {
                console.log('Error fetching countries:', err);
                res.status(500).send('Error fetching countries');
              });
        },

        createCity: (req, res) => {
            const { name, rating, countryId } = req.body;
        
            sequelize
              .query(
                `INSERT INTO cities (name, rating, country_id) VALUES ('${name}', ${rating}, ${countryId})`
              )
              .then((dbRes) => {
                res.status(200).send(dbRes[0]);
              })
              .catch((err) => {
                console.log('Error creating city:', err);
                res.status(500).send('Error creating city');
              });
          },

          getCities: (req, res) => {
            sequelize
              .query(`
                SELECT
                  cities.city_id,
                  cities.name AS city,
                  cities.rating,
                  countries.country_id,
                  countries.name AS country
                FROM
                  cities
                JOIN countries ON cities.country_id = countries.country_id
                ORDER BY cities.rating DESC
              `)
              .then((dbRes) => {
                res.status(200).send(dbRes[0]);
              })
              .catch((err) => {
                console.log('Error fetching cities:', err);
                res.status(500).send('Error fetching cities');
              });
          },

          deleteCity: (req, res) => {
            const { id } = req.params;
        
            sequelize
              .query(`DELETE FROM cities WHERE city_id = ${id}`)
              .then((dbRes) => {
                res.status(200).send(dbRes[0]);
              })
              .catch((err) => {
                console.log('Error deleting city:', err);
                res.status(500).send('Error deleting city');
              });
          },
        };