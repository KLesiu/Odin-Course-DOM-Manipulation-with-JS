const container = document.querySelector("#container");
const change = () => {
  const p = document.createElement("p");
  p.setAttribute("style", "color:red;");
  p.textContent = "Hey I'm red";
  container.appendChild(p);
  const h = document.createElement("h3");
  h.setAttribute("style", "color:blue;");
  h.textContent = "Hey I am blue h3";
  container.appendChild(h);
  const div = document.createElement("div");
  div.setAttribute("style", "border:black 3px solid;background-color:pink;");

  const hOne = document.createElement("h1");
  hOne.textContent = "I am in a div";
  div.appendChild(hOne);
  const pDiv = document.createElement("p");
  pDiv.textContent = "ME TOO!";
  div.appendChild(pDiv);
  container.appendChild(div);
};
change();
