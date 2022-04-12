# User managment API

This repo is a basic `User Managment` app which perform CRUD operations.

## The Stack

The following languages, frameworks, APIs, and services were used to create the website.

- Node.js & Express.js
- MongoDB (Hosted on AWS)

## Steps to run:
1. Clone the repo
3. `npm install`
4. setup `.env` and set `MONGO_URL` variable equal to DB connection string.
5. `npm start`

## HTTP requests:

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a new task
- `PATCH` Update a task
- `GET` Get's a task or list of user
- `DELETE` Delete a task


### Sample `POST/PATCH` request:
#### POST/PATCH url: /api/v1/users/
```
{
    "email" : "aravind@google.com",
    "password" : "1234",
    "name" : "Aravind"

}
```
### Sample url for `DELETE` request:
Delete user by id:
```
DELETE /api/v1/users/:id
```
### Sample url for `GET` request (Displays all user):
Gets all the users:
```
GET /api/v1/users/
```
