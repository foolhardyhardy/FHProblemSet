# Simple Bookkeeping App
The purpose of this problem is to help you get familiar with AJAX, more specifically the common usage pattern of XMLHttpRequest provided by browser.

A node server "server.js" is provided as the setting of this problem.  
The server has three behaviors:  
* When encountered with a GET request at "/", it response with "solution.html".
* When encountered with a GET request at "/update", it response with a stringified JSON {last: ???, total: ???} that indicate the last income/outcome and the total income/outcome.
* When encountered with a POST request at "/update", it assume the request body if a stringified JSON {latest: ???} that indicate the latest income/outcome record provided by user and it response with a stringified JSON {last: ???, total: ???} that indicate the updated last income/outcome and the total income/outcome..

Your task is to complete "submit" function and "initialize" function of the "solution.html" file's script so that:
* When load the page initially, get the last income/outcome and total income/outcome from the server and display them.
* When user click submit button, a new income/outcome record is sent to serve. (Assume the user always provide a valid number) After that, display the updated last income/outcome and total income/outcome to user. 
* The main purpose of this exercise is to get acquitance with XMLHttpRequest, thus you should not complete the task without connecting to the server.