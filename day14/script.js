let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let facts = await getFacts();
  console.log(facts.data);
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
    // console.log(res.data.fact);
  } catch (e) {
    console.log("error -", e);
    return "No fact found";
  }
}
