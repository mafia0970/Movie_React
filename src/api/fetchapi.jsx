export const fetchAPIdata = async () => {
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=99077fe0&s=titanic&page=1";
  try {
    const res = await fetch(API);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
