import * as authService from '../../src/services/auth/auth.service';

describe('Auth service', () => {
    const email = 'testemail@gmail.com';
    const password = '123456';
    describe('Register', () => {
      let receiveedUser = {};
      let receiveedToken = '';
      beforeAll(async () => {
        ({ user: receiveedUser, token: receiveedToken } = await authService.register(email, password));
      });
      it('User registred with non empty token', async () =>  {
        expect(receiveedToken).not.toBeUndefined();
      })
      it('User registred with same email', async () =>  {
        expect(receiveedUser).toHaveProperty('email', email);
      })
    });
    describe('Login', () => {
      let receiveedUser = {};
      let receiveedToken = '';
      beforeAll(async () => {
        ({ user: receiveedUser, token: receiveedToken } = await authService.login(email, password));
      });
      it('User logined with non empty token', async () =>  {
        expect(receiveedToken).not.toBeUndefined();
      })
      it('User ligined with same email', async () =>  {
        expect(receiveedUser).toHaveProperty('email', email);
      })
    });
});