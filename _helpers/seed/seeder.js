const mongoose = require('mongoose');
const userService = require('../../users/user.service');

class Seeder {
    async seedDB() {
        console.log('seeding started...');
        await this.cleanDB();
        await this.seedUsers();
        console.log('seeding all finished...');
    }

    // cleans db 
    async cleanDB() {    
        const collections = ['users'];
        for (let list of  collections) {
            await mongoose.connection.collections[list].remove();
            console.log(`"${list}" collection dropped`);
        }
    }
    
    // seed Users
    async seedUsers() {
        //console.log('seeding users started...');
        for (let user of require('./users.json')) {
            await userService.create(user);   
        }
        //console.log('seeding users finished...');
    }
}
module.exports = Seeder; 