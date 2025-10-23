module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  cors: {
    enabled: true,
    origin: [
      'https://medcare-2xlxs1mta-aktuhelpers-projects.vercel.app',
      'http://localhost:3000',  // for local development, optional
    ],
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  },
};
