var keystone = require("keystone");
var User = keystone.list("User");

exports = module.exports = function(done) {
  new User.model({
    name: { first: "Tristan", last: "Southwell" },
    email: "tristan@tristansouthwell.com",
    password: "password",
    canAccessKeystone: true
  }).save(done);
};
