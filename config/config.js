const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        bd_url:
          'mongodb+srv://admin:<password>@clusterapi-wsstp.mongodb.net/test?retryWrites=true&w=majority',
        jwt_pass: '<jwt_password>',
        jwt_expires_in: '3d'
      };
    case 'hml':
      return {
        bd_url:
          'mongodb+srv://admin:<password>@clusterapi-wsstp.mongodb.net/test?retryWrites=true&w=majority',
        jwt_pass: '<jwt_password>',
        jwt_expires_in: '5d'
      };
    case 'prod':
      return {
        bd_url:
          'mongodb+srv://admin:<password>@clusterapi-wsstp.mongodb.net/test?retryWrites=true&w=majority',
        jwt_pass: '<jwt_password>',
        jwt_expires_in: '7d'
      };
  }
};

module.exports = config();
