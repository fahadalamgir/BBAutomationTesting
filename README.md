Big Bank QA Exercise
===========================

To verify the calculator modal working as expected. I have written some automated tests in cypress. 
As the interest rate is not fixed on the loan amount and it is calculated with some invisible 
formula in this exercise context. We can change values for loan amount, months, interestrate in query parameters of get request and 
can assert the resulted values using automation scripts.

Well there can be n number of tests. But I have focused which I found necessary for this exercise.
 
test1.spec.js
==============
In the "test1.spec.js" file I have written two tests for calculator modal.

(1) I have written tests for "Customer 1 loan amount calculation".
(2) I have written tests for same customer which is "Customer1 with different loan amount values". Basically checking that calcultor 
    modal is working with changing parameters or not.

test2.spec.js
==============

In the "test2.spec.js" file I have written two tests for calculator modal.

(3) I have written test for API testing to verify its status and response body.
(4) I have written test for requests with different query parameters to create data.



Personal notes:

(1)The numeric emails should not be allowed to enter.

(2)The input validation checks on form fields are nice.

(3)This is not safe from the security perspective to show data in Url for example calculator query patrameters.

(4)If I know the interest formula used in this application I can also write tests for it.

=====================================================================================================================================================
How to Run the project ??
=====================================================================================================================================================

(1)Run this command npm install it will install all the dependencies for running the project.
(2)Double check the version of node and cypress are installed or not by hitting commands in the terminal.
(3)command: node -v
(4)command: npx cypress --version
(5)Open the cypress runner for executing tests in cypress test runner.
(6)command: npx cypress open
(7)Once the runner is started you can select and run test1.spec.js and test2.spec.js files one by one.
(8)The cypress runner will demostrate all the automation steps in the browser.

=======================================================================================================================================================
Queries ??
=======================================================================================================================================================

If you have any questions and problems running the project, shoot me an email here: fahadalamgircsd@gmail.com

Thank you for your time :)


