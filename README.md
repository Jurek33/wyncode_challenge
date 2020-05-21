
# Q&A

1. **What is the convention for naming classes in CSS?**
Answer: 
There is no only one set of rules that everyone has to follow when naming classes in CSS. There are different ways that developer can use to decide on class names. One of the most popular approaches is Block Element Modifier or simply BEM. It looks like this: `.block__element--modifier`. In this model block is an independent component that can hold other components. Element is a part of a block that can only be used inside of it. Modifier is a unit that defines how the block and element should look but its use is optional. There is another popular way of naming classes called Scalable and Modular Architecture for CSS. This pattern is useful when the developer wants to change the styles on a page while user interacts with it. It looks like this: `.element.has-error`. The main idea of all approaches is to make styles easy to manage and prevent bugs and unexpected side effects when applying a style to one of the elements affects another element.

2. **What is one way to stop a form from submitting with JavaScript?**
Answer:
To stop a form from submitting in JavaScript we can create a function that will receive an argument called event and then apply preventDefault method on it. Something like this: 
`const handleSubmit = event => event.preventDefault()`
Then we simply call this function when submitting the form. 
`<form onSubmit={handleSubmit}> /* form content */ <form>`
3. **When and how should HTML code be validated?**
Answer:
It is better when HTML code is regularly being validated during the development process. The reason for validating is to prevent unexpected behavior. It also makes the code easier to maintain as well as makes the website more 'visible' for search engines. It is important to know that different users all around the world have different devices and software which means that our code can be 'interpreted' differently according to this circumstances. Validation helps to understand whether the code is written according to web standards that guarantee that future web platforms will handle it the way we need. The most popular way to validate HTML code is to use a a tool provided by w3: [https://validator.w3.org/](https://validator.w3.org/)
4. **What is the DOM? Please explain in your own words.**
Answer:
DOM stands for Document Object Model. Basically DOM is a set of rules or standard that w3c (World Wide Web Consortium) has agreed on, which allows scripts to dynamically access contents of the document in order to update them. It is called DOM manipulation. DOM has a 'tree-like' logical structure. Each branch of this tree has at least one node. At the end of each node there is an object that describes a part of the document. This object can be accessed according to the rules and its properties can be modified. Each web page is described by the document which means that using DOM we can not only jump between static pages but also interact with them.
5. **Which one is better: CSS Grid, Flexbox or just plain CSS?**
Answer: 
Everything depends on a situation. Each approach can be useful in certain case. There are pros and cons to each of them. For example, using plain css is a good choice for styling small particular components or styling a component that does not have much content inside of it. On the other hand, if a component has a lot of children, aligning each of them one by one can be time consuming. This is where flexbox and grid come in. They allow to easily place contents of a page according to specified structure. Using grid can be a good decision when it is clear how many children element has and this value isn't going to change in future. Flexbox can help to solve the issue when children number increases if a page renders additional data. In general, both flex and grid help to achieve responsiveness and can be both used in similar situations. All these tools are decisions that every developer or a team make on their own and at the end of the day it is just a matter of personal preference and benefit against other approaches.