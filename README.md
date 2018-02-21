
####  Documentation  
<!-- Write a description of the project in your README.md -->

# backend
* Add Socket IO to your backend, with a means for adding subscriber handlers
* Subscribe to events dispatched from the frontend
  * in your subscribers publish data to the frontends to update the chat

# frontend
* Add Socket IO to your frontend, whit a means for adding subscriber handlers
* add a redux-io middleware with will emit each action to the backend
* Subscribe to the backend events
  * update the store when the backend sends payloads
