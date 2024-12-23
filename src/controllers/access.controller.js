const AccessService = require("../services/access.service");
const {CREATED,OK} = require('../core/susscess.response')
class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
      message:'Registered OK',
      metadata: await AccessService.signUp(req.body)
    }).send(res)
  };
}

module.exports = new AccessController();
