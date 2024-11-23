# Web-Development

This repository contains the code for the web development course I am currently taking.

Below are notes from the course:

## HTML

```
heading ranging from 1-6
<h1></h1>

paragraph
<p></p>

new line in a paragraph 
<br>

horizontal line
<hr>

unordered list
<ul>
	<li> item1 </li>
</ul>

ordered list
<ol>
	<li> item1 </li>
</ol>

anchor elements
<a href="link"> link </a>

image
<img src="location of image" alt="image description"/>

span used to style inline elements
<span> inline element </span>

table
<table>
	<tr class="row">
		<th class="col"> heading </th>
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
max-width:600px # screen width less or equal than 600px
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
