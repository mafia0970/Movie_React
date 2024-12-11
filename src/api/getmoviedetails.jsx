export const getmoviedetails = async ({ params }) => {
  const API = `https://www.omdbapi.com/?i=${params.movieID}8&apikey=99077fe0  `;
  try {
    const res = await fetch(API);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
