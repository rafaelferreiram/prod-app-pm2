const assert = require('assert');
const PasswordHelper = require('../src/helpers/passwordHelper');

const SENHA = '321123';
const HASH = '$2b$04$BWyMLO1FjbeXkfMYGZUaR.Rcv03WJDy/XDryWbfgWm.dkI9AsRVKS'

describe('UserHelper test suite', function () {
    it('deve gerar um hash a partir de uma senha', async () => {
        const result = await PasswordHelper.hashPassword(SENHA);
        assert.ok(result.length > 10);
    });
    it('deve comparar uma senha e seu hash', async () => {
        const result = PasswordHelper.comparePassword(SENHA, HASH)
        assert.ok(result)
    })

});