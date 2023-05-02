import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { FcDownload } from 'react-icons/fc';
import html2pdf from 'html2pdf.js';



const Blogs = () => {
    const handleDownload = () => {
        const element = document.getElementById('blog-page');
        html2pdf().from(element).save();
      };
      
    return (
        <div> 

<button onClick={handleDownload} className='btn-main flex items-center mx-auto my-5'>

<FaDownload></FaDownload>
Download This page

</button>


            <div id='blog-page'>

                
                <div  className='card space-y-5 border p-5'>


                    <h1 className='text-4xl font-bold'>

                        1. Tell us the differences between uncontrolled and controlled components.


                    </h1>
                    <p className='text-xl'>Controlled components manage and update their state through props passed down from a parent component, while uncontrolled components manage their state internally without relying on props from a parent component.</p>
                </div>


                <div className='card space-y-5 border p-5 my-10'>


                    <h1 className='text-4xl font-bold'>

                        2. How to validate React props using PropTypes


                    </h1>
                    <p className='text-xl'>React provides a way to validate props passed to a component using PropTypes. PropTypes is a type-checking library that can be used to ensure that the props passed to a component are of the expected type.

                        To use PropTypes, you first need to import it from the 'prop-types' package. Then, you can define the expected type of each prop in the component's propTypes object</p>
                </div>

                <div className='card space-y-5 border p-5'>


                    <h1 className='text-4xl font-bold'>

                        3. Tell us the difference between nodejs and express js.


                    </h1>
                    <p className='text-xl'> Node.js is a runtime environment that allows JavaScript to be run on the server-side. It provides the ability to execute JavaScript outside of a web browser. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of tools and features that make it easier to build web applications using Node.js.

                        Node.js provides the basic building blocks for server-side JavaScript programming, such as file I/O, network communication, and event handling. Express.js builds on top of Node.js by providing a layer of abstraction for common web application functionality, such as routing, middleware, and template engines.

                        In short, Node.js is a runtime environment for JavaScript, while Express.js is a web application framework that runs on top of Node.js. Express.js simplifies web application development by providing a set of tools and features that are not included in Node.js out of the box.</p>
                </div>
                <div className='card space-y-5 border p-5 my-10'>


                    <h1 className='text-4xl font-bold'>

                        4. What is a custom hook, and why will you create a custom hook?


                    </h1>
                    <p className='text-xl'> A custom hook is a reusable function in React that encapsulates stateful logic across different components. They can reduce code duplication, improve code readability, and make your code more modular. You might create a custom hook to extract and reuse shared logic across multiple components.</p>
                </div>



            </div>
        </div>
    );
};

export default Blogs;