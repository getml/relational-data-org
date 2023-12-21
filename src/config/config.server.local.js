module.exports = {
  database: {
    client:   'mysql',
    host:     'relational.fit.cvut.cz',
    user:     'guest',
    password: 'relational',
    database: 'meta',
    featureFunction: {
      data: {
        user:     'ctu_feature_data',
        password: 'TO_BE_FILLED_PASS1',
        database: 'ctu_feature_data'
      },
      results: {
        user:     'ctu_feature_func',
        password: 'TO_BE_FILLED_PASS2',
        database: 'ctu_feature_func',
      },
      temp: {
        user:     'ctu_feature_temp',
        password: 'TO_BE_FILLED_PASS3',
        database: 'ctu_feature_temp',
      }
    }
  },
  email: {
    transporter: {
      auth: {
        user: 'TO_BE_FILLED_EMAIL@gmail.com',
        pass: 'TO_BE_FILLED_PASS4'
      }
    }
  }
};
