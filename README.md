# Automation

Test Overview:-
1) Login: You start by visiting the web application's login page and logging in with a specific email and password.
2) Add Package: After logging you will be navigated to Package Types then a new package will be added manually by clicking on Add Manually button after this the name and dimensions of the package will be provided and the package will be created.
4) Logout: And then we logout.
5) Delete Package: Log in again. and click to the recently added package and delete the package, Logout again.

Design Decisions and Approach:-
a) Separation of Test Cases: The "Add Package" and "Delete Package" actions are seperated into two different test cases.
b) Explicit Waits: cy.wait are introduced for explicit waits between certain actions. 
c) Repetition of Login and Logout: log in and log out is done for both test cases,that ensures each test starts with a known state (logged in) and ends in a known state (logged out).
d) CSS Selectors: CSS selectors are used to locate elements on the web page. 
e) Hardcoded Values: hardcoded values are used like email, password, and package details directly in the test script to get accurate result. 
