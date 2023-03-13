//This code is for demonstration purposes only. It must never be used in production environments 
function getByEmail(email, callback) {

    var axios = require("axios").default;
    
    var authOptions = {
      method: 'POST',
      url: 'https://demo-platform-migration.us.auth0.com/oauth/token',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: new URLSearchParams({
        grant_type: "client_credentials",
        audience: 'https://demo-platform-migration.us.auth0.com/api/v2/',
        realm: 'Username-Password-Authentication',
        client_id: 'y09dIRPyFkkOjhArTQ64QyQY4AfTIcpa',
        client_secret: configuration.CLIENT_SECRET_GET_USER
      })
    };
    
    axios.request(authOptions)
    .then(function (response) {
     
      var getUserOptions = {
        method: 'GET',
        url: 'https://demo-platform-migration.us.auth0.com/api/v2/users-by-email?email=' + email,
        headers: {'Authorization': 'Bearer ' + response.data.access_token}
      };
    
      axios.request(getUserOptions, cb)
      .then(function (response) {
        
        if(response.data.length <= 0) {
          return callback(null,null);
        }
    
        return callback(null, {'email': email});
      }).catch(function (error) {
        return callback(null,null);
      });
    }).catch(function (error) {
      return callback(null,null);
    });
 //This code is for demonstration purposes only. It must never be used in production environments 
}