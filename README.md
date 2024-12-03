# Web-Development

This repository contains the code for the web development course I am currently taking.

Below are notes from the course:

## HTML

```html
heading ranging from 1-6
<h1></h1>

paragraph
<p></p>

new line in a paragraph 
<br />

horizontal line
<hr />

unordered list
<ul>
  <li>item1</li>
</ul>

ordered list
<ol>
  <li>item1</li>
</ol>

anchor elements
<a href="link"> link </a>

image
<img src="location of image" alt="image description" />

span used to style inline elements
<span> inline element </span>

table
<table>
  <tr class="row">
    <th class="col">heading</th>
  </tr>
</table>

<head>
  information not shown on the website, such as character set
</head>
```

## CSS

### Selectors

```
Select h1 and make it blue
h1{
	color:blue
}

Select a class, multiple objects
.class{
	color:red
}

Select a id, one object
#id{
	color:red
}

Select paragraphs that are draggable
p[draggable = "true"]{
	color:red
}

Select everything
*{
	color:red
}

Select sub elements
.class subelements{
	color:red
}

two selectors
s1,s2{
	color:red
}

child
s1 > s2{
	color:red
}

and operator
s1s2{
	color:red
}
```

### Properties

```
css properties
font-size:20px # font-size, 1em is 100% of parent size 1rem 100% of root normal html element

font-weight:bold # you can change how bold you want

font-family:font1,font2 # change typeface if font1 does not work font2 shows

text-align:center # set where the text is

display:inline # display elements in a line, you can not set height and width
display:block # display elements in different lines
display:inline-block # display elements in a line, you can set height and width
display:none # hide element

position:relative # relative to where it would be
position:absolute # relative to the parent element's top left corner
position:fixed # relative to the browser window

#wrap text
float:left # float element to the left
float:right # float element to the right
float:clear # clear float

#Each html element is a box below are properties that change the box
height:100%
width:100%
border: 10px solid black # take 3 values thickness style color
border-top: 0px # make top border 0 pixels
border-width: 0px 10px 20px 40px # top right bottom left or top bottom
padding:20px # push border out by 20px add space between element and border
margin:20px # add space by 20 px between border and outside
```

### Cascading Style Sheets importance

```
Position
Specificity # id > attribute > class > element
Type # inline > internal > external
importance  #color:green !important # override other css
```

### Responsive Design

Flex good for 1d
Grid good for 2d
Bootstrap: mobile first design

#### Media query

```
max-width:600px  screen width less or equal than 600px
@media screen and (max-width: 600px){
	#CSS for screen width less or equal than 600px
}

min-width:600px # screen width more or equal than 600px
@media screen and (min-width: 600px){
	#CSS for screen width more or equal than 600px
}

@media (max-width: 600px) and (min-width: 300px){
	#CSS for screen width less or equal than 600px and more or equal than 300px
}

mobile: 320px - 480px
tablet: 481px - 1200px
laptop: 1201px - 1600px
desktop: 1600px and more
```

#### Flexbox

```
.container{
	display:flex;
}

flex-direction: row # default left to right
flex-direction: row-reverse # right to left
flex-direction: column # top to bottom
flex-direction: column-reverse # bottom to top

flex-basis: 100px; # set width or height of element

order: 1; # change order of element

flex-wrap: wrap; # wrap elements if they do not fit. Go to next line.
flex-wrap: nowrap; # do not wrap elements

x-axis
justify-content: center; # center elements
justify-content: space-between; # space between elements

y-axis
align-items: center; # center elements vertically
align-items: flex-start; # align elements to the top
```

## React

Clustering javascript, html, and css into same components that can be reused.
This is super useful for scaling and maintaining code.

### Components

vite to create react environment

```js
npm create vite@latest project  -- --template react
```

component is a function that returns JSX

```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  );
};
export default App;
```

set state with useState

```js
const [counter, setCounter] = useState(0);
// may only be called from the inside of a function body that defines a React component
```

event handler

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
    </div>
  );
};
```

```js
debugger; //to add break point
```

Inline styles

```js
const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2024
      </em>
    </div>
  );
};

const App = () => {
  // ...

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      // ...
      <Footer />
    </div>
  );
};
```

## JavaScript

```js
const // variable that can not be reassigned. However, the content of the object variable refers to can be changed.
let // variable that can be reassigned
```

Arrays

```js
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

# forEach
t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})
```

Concat

```js
const t2 = t.concat(5); // creates new array

console.log(t); // [1, -1, 3] is printed
console.log(t2); // [1, -1, 3, 5] is printed
```

Destructuring arrays

```js
const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(first, second); // 1, 2 is printed
console.log(rest); // [3, 4, 5] is printed
```

Filter

```js
var dog = animals.filter(animal => animal.species === 'dog');
# filter will loop though every element in array and return a new array with only the elements that pass the condition
```

Reject

```js
var dog = animals.reject(animal => animal.species === 'dog');
# reject will loop though every element in array and return a new array with only the elements that do not pass the condition
```

Map

```js
const t = [1, 2, 3];

const m1 = t.map((value) => value * 2);
console.log(m1); // [2, 4, 6] is printed
```

Reduce

```js
var total = [0, 1, 2, 3].reduce(function (sum, value) {
  return sum + value;
}, 0);

//reduce will loop though every element in array and return a single value. it also needs a starting object here it is 0
```

Objects

```js
const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};
```

Toggle

```js
const label = statement ? "if statement if true" : "if statement is false";
```

## Backend

### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

- Create servers
- Communicate with databases
- Read and write files on your computer

### Axios

an open source library to communicate between the browser and server.

Promise is an object representing the eventual completion or failure of an asynchronous operation.
success is handled with the then method and failure with the catch method.

```js
const promise = axios.get("http://localhost:3001/notes");
promise.then((response) => {
  console.log(response);
});
```

Hook is a function that do something when something changes. Or a function that allows you to create state in a functional component.

```js
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  //useEffect specify how often a function is run
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []); // empty array means that the effect is only run along with the first render of the component, if it is not empty it will run when the content of the array changes.
  console.log("render", notes.length, "notes");

  // ...
};
```

methods

```js
//post request update the server
axios.post("http://localhost:3001/notes", noteObject).then((response) => {
  console.log(response);
});
```
