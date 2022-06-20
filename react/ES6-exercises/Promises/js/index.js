fetch("https://animechan.vercel.app/api/random", {
  method: "GET",
})
  .then((res) => {
    //catching errors
    if (res.ok) {
      console.log("Success");
    } else {
      console.log("Not Successful");
    }
    return res.json();
  })
  //output API data
  .then((data) => console.log(data));
