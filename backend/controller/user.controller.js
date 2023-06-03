const db = require('../db/db')
console.log(db)

class UserController {
    async createUser(req, res){
        console.log('принято')
        const name = 'yura'
        const person_name = 'yura'
        const person_phone = '05069'
        const person_adress = 'веш'
        // const newPerson = await db.query(`INSERT INTO persons (person_name, person_phone, person_adress) values ($1, $2, $3) RETURNING *`, [person_name, person_phone, person_adress])
        const newPerson = await db.query(`INSERT INTO user (name) values ($1) RETURNING *`, [name])

        console.log(newPerson)
    }

    async getUsers(req, res){

    }
    async getOneUser(req, res){

    }
    async updateUser(req, res){

    }
    async deleteUser(req, res){

    }
}

module.exports = new UserController()