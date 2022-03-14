DB Creation
sequelize db:create

Show all Sequelize Functionalities
sequelize

Using Sequelize CLI to create a new Model
sequelize model:generate --name User --attributes name:string,email:string

Migrate Database
sequelize db:migrate

Undo Database Migartion
sequelize db:migrate:undo

Run Seeders
npx sequelize-cli db:seed:all

Run one Seeder
npx sequelize db:seed --seed my_seeder_file.js