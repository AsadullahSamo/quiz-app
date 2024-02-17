// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple&encode=base64'
    );

      const data = await response.json();
      res.json(data);
  }

  catch (error) {
      console.error('Error fetching data:', error);
    }
}
  
