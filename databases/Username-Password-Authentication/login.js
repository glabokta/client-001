//This code is for demonstration purposes only. It must never be used in production environments
function login(email, password, callback) {

var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://demo-platform-migration.us.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'password',
    realm: 'Username-Password-Authentication',
    username: email,
    password: password,
    scope: 'openid profile email',
    client_id: 'OasfKSnsrITStKV5AEC7WsR4AQ6TCjVC',
    client_secret: configuration.CLIENT_SECRET
  })
};

axios.request(options)
.then(function (response) {
  console.log(response.data);
  return callback(null, {"email": email});
}).catch(function (error) {
  console.error(error);
  return callback(new WrongUsernameOrPasswordError(email, "Incorrect username/email or password."));
});

  //This code is for demonstration purposes only. It must never be used in production environments
}
