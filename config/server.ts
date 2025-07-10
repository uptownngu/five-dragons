module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // 모든 IP에서 접근 가능하도록
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://141.164.52.65:1337'), // 외부 URL 설정
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
