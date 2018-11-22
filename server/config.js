// const env = process.env.NODE_ENV || 'production';
// const env = 'development';

const config = {
  cookie: {
    session_name: "students-office-session",
    event_session_name: "students-office-event-session"
  }
};

// const config = {
//   development: {
//     ...defaultConfig,
//     ...development
//   },
//   production: {
//     ...defaultConfig,
//     ...production
//   }
// };

module.exports = config;
