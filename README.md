Q1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll: These are all DOM selection methods, but they work in slightly different ways.
getElementById() is used to select a single element based on its unique id. Since an id should be unique in a webpage, this method always returns only one element. It is simple
and very fast when you know the exact id of the element you want.getElementsByClassName() is used to select elements that share the same class name. Unlike getElementById(),
it can return multiple elements because many elements can have the same class. It returns an HTMLCollection, which behaves like an array but is not a true array.
querySelector() and querySelectorAll() are more flexible because they use CSS selectors. With these methods, you can select elements using id, class, tag name, attribute,
or even complex CSS selectors. querySelector() returns only the first matching element, while querySelectorAll() returns all matching elements as a NodeList.
In short, getElementById() is used for a single id, getElementsByClassName() is used for multiple elements with the same class, and querySelector methods provide more flexibility using CSS-style selection.

Q2. To create a new element in JavaScript, we use the document.createElement() method. This method creates the element in memory but does not automatically display it on the webpage.
After creating the element, we can add content to it using properties like textContent or innerHTML. We can also add attributes such as class or id.
Finally, to display the element on the webpage, we insert it into the DOM using methods like appendChild(), append(), or prepend(). These methods attach the new element to a parent element
that already exists in the document.So the process involves three main steps: creating the element, modifying it, and then inserting it into the DOM.

Q3. Event bubbling is a behavior in the DOM event system where an event starts from the target element and then propagates upward through its parent elements.
For example, if a button is inside a div and the div is inside the body, when the button is clicked, the click event first triggers on the button. After that, it moves to the div, and then to the body.
This upward movement of the event is called bubbling.This mechanism allows parent elements to respond to events triggered by their child elements. It is the default event flow in JavaScript.

Q4. Event delegation is a technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to their common parent element.
Because of event bubbling, when a child element is clicked, the event travels up to the parent. The parent can then check which child triggered the event and respond accordingly.
This approach is useful for several reasons. It improves performance because fewer event listeners are used. It also works well for dynamically added elements, since the parent listener can handle
events even for elements created later. Additionally, it keeps the code cleaner and more organized.

Q5. Both methods are related to event handling, but they serve different purposes.preventDefault() is used to stop the browser’s default behavior for an event. For example, when a form is submitted,
the browser normally reloads the page. If we call preventDefault(), the form submission can be stopped.stopPropagation() is used to stop the event from moving up (or down) the DOM tree.
In other words, it prevents event bubbling or capturing.The key difference is that preventDefault() controls the browser’s built-in action, while stopPropagation() controls how the event travels between elements.
