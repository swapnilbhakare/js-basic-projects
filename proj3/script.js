const courses = [
  {
    name: "Complete ReactJS course",
    price: "2.3",
  },
  {
    name: "Complete Angular course",
    price: "2",
  },
  {
    name: "Complete MERN course",
    price: "2.5",
  },
  {
    name: "Complete C++ course",
    price: "2.2",
  },
  {
    name: "Complete MEAN course",
    price: "2.3",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    //create a li element using js
    const li = document.createElement("li");
    // add class of li element
    li.classList.add("list-group-item");
    // add text node in li element
    const name = document.createTextNode(course.name + "   ");
    li.appendChild(name);

    // create a span element
    const span = document.createElement("span");
    // add class for span element
    span.classList.add("float-right");
    // create a text node for span element
    const price = document.createTextNode(`$ ${course.price}`);
    span.appendChild(price);

    // append span in li
    li.appendChild(span);
    // append li in ul
    ul.appendChild(li);
  });
}

window.addEventListener("load", generateList);

const btn = document.querySelector(".sort-btn");
btn.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});

const button = document.querySelector(".sort-btn-high");

button.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  generateList();
});
