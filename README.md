# Pet Adoption Agency - Unit 5 Assessment

## Introduction

This repository contains the code for the Pet Adoption Agency project, which is part of the Unit 5 Assessment. The project simulates a pet adoption agency where animals are rescued, cared for, and matched with potential owners.

## Setup

To run the project locally, follow the steps below:

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Run `npm install` in the project's root directory to install the required dependencies.
4. Create a .env file in the root of the project and set the following variables:

   ```
   SERVER_PORT=4004
   CONNECTION_STRING=your_database_connection_string
   ```

   Replace `your_database_connection_string` with your actual database connection string, e.g., PostgreSQL URI from Bit.io.

## Part 1: Data Modeling

The project uses a PostgreSQL database and Sequelize as the ORM. The database has four tables:

1. `countries`: Stores the list of countries where the adoption agency operates.
2. `cities`: Contains information about the cities in which the agency operates, including city name, rating, and a foreign key reference to the country table.
3. `animals`: Represents the animals available for adoption.
4. `owners`: Stores information about the potential pet owners.

## Part 2: Sequelize

The project uses Sequelize to connect the front end to the database through a server and make queries to the database.

### API Endpoints

1. `POST /seed`: Seeds the database with initial data for countries and cities.
2. `GET /countries`: Fetches the list of countries from the database.
3. `POST /cities`: Adds a new city to the database with a name, rating, and country_id.
4. `GET /cities`: Retrieves a list of cities from the database, ordered by rating (highest to lowest).
5. `DELETE /cities/:id`: Deletes a city from the database based on the provided city_id.

## Running the Project

1. Start the server by running `npm start` or `nodemon` in the project's root directory.
2. Use Postman or any other API testing tool to make requests to the API endpoints.

## Extra Credit

For the extra credit, we updated the `getCities` function to fetch cities in descending order of their ratings and added at least three entries to the city table in the `seed` function.

## License

This project has not been licensed.