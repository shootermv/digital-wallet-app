const mongoose = require('mongoose');



class Seeder {
    //_userSerice;  
    constructor(User, Task) {
      this._userService = User;
      this._taskService = Task;
    }

    async seedDB() {
        await this.cleanDB();
        await this.seedUsers();
        await this.seedTasks();
        console.log('seeding all finished...');
    }

    // cleans db 
    async cleanDB() {      
        await mongoose.connection.collections['users'].remove();
        console.log('"users" collection dropped');
      
        await mongoose.connection.collections['tasks'].remove();
        console.log('"tasks" collection dropped');      
    }

    // seed users
    async seedUsers() {
        console.log('seeding users...');
        for (let user of require('./users.json')) {
            await this._userService.create(user);   
        }
        console.log('seeding users finished...');
    }

    // seed tasks
    async seedTasks() {
        console.log('seeding tasks...');
        for (let task of require('./tasks.json')) {
            await this._taskService.create(task);   
        }
        console.log('seeding tasks finished...');
    }    

}
module.exports = Seeder; 