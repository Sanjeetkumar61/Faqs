const dataArray = [
  {
      title: 'Why is JavaScript cool?',
      detail: 'JavaScript is cool because it’s a versatile, powerful language that brings web pages to life, enabling dynamic and interactive user experiences. It runs seamlessly in the browser, allowing developers to create responsive designs, real-time updates, animations, and even complex applications without relying on server-side processing. Its vast ecosystem, with frameworks like React, Angular, and Node.js, extends its capabilities beyond the front end to full-stack development. Additionally, JavaScript’s flexibility, ease of learning, and active community support make it an essential tool for modern developers, fostering creativity and innovation in web development.',
  },
  {
      title: 'What is JavaScript?',
      detail: 'JavaScript is a high-level, versatile programming language primarily used to create interactive and dynamic content on websites. It enables developers to add features like animations, form validations, real-time updates, and interactive elements that enhance user experience. As a core technology of web development, alongside HTML and CSS, JavaScript runs directly in web browsers, making it essential for front-end development. With the introduction of environments like Node.js, JavaScript has also become popular for server-side programming, allowing for full-stack development. Its simplicity, flexibility, and extensive ecosystem make it one of the most widely used programming languages in the world.',
  },
  {
      title: 'How do I learn JavaScript?',
      detail: 'Learning JavaScript effectively involves a combination of understanding its fundamentals, consistent practice, and building real-world projects. Start by grasping the basics, such as variables, data types, functions, loops, and conditionals. Once comfortable, explore more advanced concepts like objects, arrays, DOM manipulation, and event handling. ',
  },
  {
      title: 'What are the best things about JavaScript?',
      detail: 'The best things about JavaScript are its versatility, flexibility, and wide-ranging applications in web development. It allows developers to create dynamic, interactive user interfaces directly in the browser, enhancing the user experience without constant server communication. JavaScript’s ability to work on both the front end and back end, thanks to environments like Node.js, makes it a powerful tool for full-stack development. ',
  }
];

const makeHTML = data => {
  return `<details> 
      <summary>${data.title}</summary>
      <p>${data.detail}</p>
  </details>`
};

const container = document.getElementById('faq-container');

container.innerHTML = dataArray.map(data => makeHTML(data)).join('');