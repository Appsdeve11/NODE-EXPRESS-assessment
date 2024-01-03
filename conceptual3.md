### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JWT, or JSON Web Token, is an open standard for securely transmitting information between parties.

- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT is used to verify or authenticate a token. It confirms that the token has not been manupulated or tampered with.

- If a JWT is intercepted, can the attacker see what's inside the payload?
If a JWT is intercepted by an attacker, they can see the contents of the payload.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Authentication with a JWT involves the client sending their credentials to the server, which than verifies it and creates a JWT. The server then sends the JWT back to the client and the server authenticates.

- Compare and contrast unit, integration and end-to-end tests.
Integration tests are used to verify interactions within components on a app while End-to-end tests check the entire application flow.

- What is a mock? What are some things you would mock?
a mock allows us to control the behavior of the dependency and seperate code when being tested.

- What is continuous integration?
continous intergration is when developers can have access to the same code. It's often used for group projects.
- What is an environment variable and what are they used for?
enviornmental variables are part of a systems enviornment and are variables used to store settings, sensitive information or specific data.

- What is TDD? What are some benefits and drawbacks?
TDD, which stands for test-Driven Dvelopment is a software that are actually written before the app is developed ot before the actual code is written. One of benefits is seeing a problem before it becomes a problems which can make the application extrememly useful but can pro long the actual developement of the app.

- What is the value of using JSONSchema for validation?
the value of using JSONSchema is that validates the data that is returned is in the correct format which can help with efficiency in the app and consistency. 
- What are some ways to decide which code to test?
The best way to determine which code to test is by isolating your code and prioritize code that may be more complex or has greater chance of failure. 

- What does `RETURNING` do in SQL? When would you use it?
"returning" in SQL returns values when data is manupulated. You can use INSERT, UPDATE etc. It allows us to retrive us to retrieve modified data faster.
- What are some differences between Web Sockets and HTTP?
web sockets provide communication between client and server which allows for quick and realtime  data transfer. On the the other hand, HTTP is a request protocol that operates on a client server model.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
It seems like Express was just far easier to use. I feel like as a beginner it was just more straightfoward and I found myself completing projects faster. I know I should not be focusing on whats easier but I think we can agree the easier you find something the better you can become in that area or in this case, framework.
