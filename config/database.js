module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdgpvc6n6mpta8853ir0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_5kyx'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'k3lbEC8nkrHmu5WWsuI3BmeF26QdHiDq'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
