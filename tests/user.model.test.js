const mongoose = require('mongoose');

const User = mongoose.model('User');



describe('Users', () => {
  describe('CREATE', () => {
    
    test('can create a user', async () => {
      await new User({
        username: 'vasia',
        hash: '10rs55seeeX',
        firstName:  'Vasia',
        lastName:  'Petrov',
      }).save();
      const user = await User.findOne({ username: 'vasia' });

      expect(user.lastName).toEqual('Petrov');
    });

  });
});