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

#### Media query

```
#media query
@media screen and (max-width: 600px){
	#CSS for screen width less or equal than 600px
}

```
