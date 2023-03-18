## Steps to run this project

- npm i
- In terminal, run the command `npx sequelize init`

## Create a .env file in the root directory
    - set PORT variable
        - example: PORT=3000

## Create a file 'config.json' in config folder
 -- add this code
        `
            {
                "development": {
                    "username": <YOUR_USERNAME>,
                    "password": <YOUR_PASSWORD>,
                    "database": "Flights",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                }
            }
        `

## run this command in terminal:
    - `npx sequelize db:migrate` 
    - `npx sequelize db:seed:all`    

    