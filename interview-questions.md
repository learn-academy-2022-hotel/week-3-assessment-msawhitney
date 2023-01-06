# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:JSX is a kind of Javascript/HTML-like code. It is used in React. Some attributes are different - for example class in HTML is class, and it is className in JSX.

Researched answer: JSX is a syntax extension for JavaScript that is used within React for building user interfaces. 
They have some similarities, but these are some main differences: 
-HTML tags are written in lowercase. JSX tags are written in UPPERCASE.
-HTML tags usually need a closing tag. For example: <div></div>. JSX tags can be self-closing: <div />.
-HTML naming convention is lowercase, JSX is camelCase. 

To embed a JavaScript function in JSX you need curly braces. 


2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a package manager for Javascript - it stands for "Yet Another R.. N.." (resource negotiator). When you run the command yarn, some files like yarn.lock are added to your project. 

Researched answer: Yarn is a package manager for JavaScript that was developed by Facebook. 
Yarn reads a file called "package.json" and it installs the dependencies listed in that file. Actually, yarn.lock is a file that tells which version of the dependencies listed in it are needed. It makes sure the same version of dependencies are used in all of the environments of your React project. 
If there is no yarn.lock file, one will be added. 
Yarn creates a "node_modules" directory in the project and that's where it installs the packages and dependencies. 

3. What is a React component? 

Your answer: A React component is a piece of code that can be reused.

Researched answer: A React component is a piece of code that is reusable. It represents part of the interface with the user. It can be a function, a class, or an object. Usually the component specifies the rendering logic for a piece of the user interface. Components in React are a powerful way to build reusable and modular elements for the UI.
Components can accept input in the form of props (properties). Props are arguments that are passed to the component when it is rendered. 

4. What is the difference between state values and props in React?

Your answer: State values store the current value of state. Props are like arguments in a function. 

Researched answer: Both state values and props are used to store data in a component.  

Props stand for "properties" and they are used to pass data from a parent to a child component. They are passed to a component as an object and are unchangeable within the component (immutable). A component that receives props is called a "controlled" component because it is controlled by the parent component. Props are used to customize or configure a component when it is rendered. 

State is a way for a component to store and manage its own data. A state variable stores values that change within the component, such as form input values or toggle states. 
 
 An important difference between the two kinds of values is that, while props are passed from parent to child components, state is managed within a single component. 

 Prop values can't be changed within a component, but state values can be modified within a component by using "this.setState()".


5. What is the DOM? 

Your answer: It stands for Document Object Model. It's the area of a website that a user interacts with. (This answer isn't really correct. It's more like programming - the viewer interacts with the programming and sees the resulting structure/document.)

Researched answer: The DOM is a programming interface for web documents and it represents the page so that programming languages can interact with it. There are three parts to the DOM: Core, HTML, and XML. The DOM allows programs to access and manipulate the structure, style, and content of a document. It represents the structure of document like a tree of objects. Each object represents a part of the document (for example, an element, an attribute, or a piece of text.)

6. STRETCH: Which is the difference between a div and a span?

Your answer: A div element is a container in HTML. It is a block-level element. A span is an inline element.

Researched answer: A div element is used in HTML for layout purposes. A div element is a container in HTML. It is a block-level element. A span is an inline element that can be used, for example, to change the color of a small portion of text within a paragraph. Examples of both are below: 

div = <div></div>
span =<span></span>

<div><h1><Hello World!></h1></div>

<p>Here is a paragraph and within this paragraph there is a <span style="color: red;">span of text</span> that will be turned red.</p>

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: (OOP) is programming that is based on data or "objects" as opposed to functions and logic. Objects are "self-contained units that consists of both data and code." Data is stored in a traditional relational database or in an object database.
Some major features of OOP are classes and inheritance, encapsulation, abstraction, and polymorphism. 
Some key OOP programming languages are Java, C++, Python, Ruby

2. Ruby: Ruby is a programming language that was invented in the 1990s by Yukihiro Matsumoto. It is known for its simplicity and readability. It is also very flexible. 
Ruby supports object-oriented programming. Everything in Ruby is an object and each object has its own methods and properties. 
Ruby is often used for web development because of something called Ruby on Rails which is a framework, built on top of Ruby, that provides a simple way to build web apps quickly. 
Ruby is also used for data processing, automation and scripting. 

3. Implicit return: Functions or methods in most programming languages require a return statement to return a value. Some languages, however, have something called "implicit return." This means that there is no explicit need for the return keyword. It is "implicit." Instead, the function or method returns the value of the last expression that was evaluated. 
Implicit return can make code shorter and more readable, but can also be confusing for people who aren't familiar with the programming language or make it harder for some to understand the flow of a program.

4. Ruby blocks: In Ruby, a block is a chunk of code (an anonymous function) that can be passed as an argument to a method. Blocks are often used in Ruby to allow a method to perform looping or some kind of iteration. Ruby blocks are assigned a name and are defined using the keywords "do" and "end" (do/end) or placed between curly braces {}, and they can have multiple arguments.
Do/end is used for blocks that span multiple lines, while {} is used for single line blocks. Blocks can have arguments which are defined between two pipe characters -> ||.


5. Ruby hashes: In Ruby a hash stores key/value pairs. It can be like an array, except the order it is in is arbitrary, not based on an index. 
Attempting to access a hash with a key that does not exist will result in the method returning "nil." Hashes can be useful because they allow data to be looked up quickly based on a key, and they are easy to modify and update. 
A hash can also be called a "dictionary" or an "associative array". 

Here is an example of a hash in Ruby:
person = { "name" => "Aileen Smith", "age" => 39, "sign" => "Leo" }
 

