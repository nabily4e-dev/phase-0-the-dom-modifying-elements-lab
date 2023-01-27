// Write your code here!

// const element = document.createElement("div");

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
// 	const li = document.createElement("li");
// 	li.textContent = (i + 1).toString();
// 	ul.append(li);
// }

// element.append(ul);

// const mainElement = document.getElementById("main");

// mainElement.style.height = "300px";

// mainElement.style.backgroundColor = "#27647B";

// mainElement.textContent = "You've changed what's on the screen!";

// mainElement.style.fontSize = "24px";
// mainElement.style.marginLeft = "30px";
// mainElement.style.lineHeight = 2;

// mainElement.className = "pet-listing dog";

// mainElement.classList.remove("dog");

// mainElement.classList.add("cat", "sale")

// const removeUl = document.getElementsByTagName("ul")[0];

// const secondChild = removeUl.querySelector("li:nth-child(2)");

// removeUl.removeChild(secondChild);

// ul.remove();


// mainElement.remove();

// const newHeader = document.createElement("h1");


const main = document.querySelector('main#main');
main.parentNode.removeChild(main);

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'John Doe is the champion';

// const testVar = "hi"

// /* Enter the code to remove the node element here */
// document.querySelector("main#main").remove();

// /* Create your new element here and assign it to newHeader */
// const newHeader = document.createElement("h1");
// newHeader.id = "victory"
// newHeader.innerHTML = "Flatiron School is the champion!";
// newHeader.className = "victory";

