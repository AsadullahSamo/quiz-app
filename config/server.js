const dev = process.env.NODE_ENV !== 'production';

module.exports = dev ? 'http://localhost:3000' : 'https://quiz-app-ten-coral.vercel.app/'

    