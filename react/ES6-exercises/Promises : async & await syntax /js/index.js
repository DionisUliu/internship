async function getData() {
  const response = await fetch("https://animechan.vercel.app/api/random");
  const data = await response.json();
  return data;
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log("errors: " + err.message));
