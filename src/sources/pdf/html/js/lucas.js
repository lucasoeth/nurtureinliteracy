//Array for name and category
names = ["Intellectual Power Masks Mastery--Distortion in the Mind of the Colonized\t",
      "Rhetoric & Composition - Freshman Composition Instruction\t",
      "Superior Sisters\t"];
category = [0, 1, 2,];


const EXPAND_BTN = document.querySelectorAll("#expand-btn");
const PUBLIC = document.querySelector("#publications");

//The Context that is going to be inside the expanded area
expand_context = [];
for (let i=0; i < EXPAND_BTN.length; i++) {
	expand_context[i] = document.createElement("div");
	expand_context[i].classList.add("pub-exp-container");
}
for (let i=0; i < names.length; i++) {
	let index = category[i];
	let text = document.createElement("div");
	let btn = document.createElement("div");
	
	text.classList.add('pub-exp-content');
	btn.classList.add('pub-exp-content');
	text.appendChild(document.createElement('p'));
	text.firstElementChild.appendChild(document.createTextNode(names[i]));
	text.firstElementChild.classList.add('moon');
	btn.appendChild(readBtn(names[i]));
	expand_context[index].appendChild(text);
	expand_context[index].appendChild(btn);
}

//If click then expand
for (let i=0; i < EXPAND_BTN.length; i++) {
	EXPAND_BTN[i].addEventListener("click", function() {expand(i)}, false);
}

//First word function
function firstWord(string) {
	let i = 0;
	let new_str = "";
	while (string.length > i && string[i] != " ") {
		i++;
	}
	for (let x=0; x<i; x++) {
		new_str += string[x];
	}
	return new_str;
}

//Read read_btn
function readBtn(string) {
	let temp_btn = document.createElement("a");
	temp_btn.appendChild(document.createTextNode("READ"))
		temp_btn.classList.add('btn', 'btn-default', 'btn-md', 'pub-exp-content-btn')
		let word = firstWord(string);
	temp_btn.href = "publications/" + word + ".pdf";
	return temp_btn;
}

function expand(index) {
	if (document.querySelector(".pub-exp-container") != null) {
		PUBLIC.removeChild(document.querySelector(".pub-exp-container"))
	}
	PUBLIC.appendChild(expand_context[index]);
}
