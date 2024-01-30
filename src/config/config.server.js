var _ = require('underscore');
var localConfig = require('./config.server.local');

var config = {
  api: {
    url: '/api/v1'
  },
  database: {
    client: 'mysql',
    host: 'db.relational-data.org',
    user: 'guest',
    password: 'relational',
    database: 'meta',
    featureFunction: {
      data: {
        user: '',
        password: '',
        database: 'ctu_feature_data',
      },
      results: {
        user: '',
        password: '',
        database: 'ctu_feature_func'
      },
      temp: {
        user: '',
        password: '',
        database: 'ctu_feature_temp'
      }
    }
  },
  email: {
    transporter: {
      service: 'Gmail',  // sets all the parameters: https://nodemailer.com/smtp/well-known/
      auth: {
        user: "watchdog.jm@gmail.com",  // this is a throwaway account -> it is OK to use hardcoded credentials
        pass: "StrongHrad99"
      }
    },
    recipient: 'Jan Motl <jan.motl@fit.cvut.cz>, Oliver Schulte <oschulte@cs.sfu.ca>, Niklas Martin <niklas@getml.com>'
  },
  googleAnalyticsId: 'UA-61229872-1',
  isProduction: process.env.NODE_ENV === 'production',
  piping: {
    ignore: /(\/\.|~$|\.(css|less|sass|scss|styl))/,
    hook: true
  },
  port: process.env.PORT || 80,
  webpackStylesExtensions: ['css', 'less', 'sass', 'scss', 'styl'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};

module.exports = _.extend(config, localConfig);
