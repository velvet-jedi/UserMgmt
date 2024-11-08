Task
The frontend is a Single Page Application and uses React.

a) We want to equip our frontend with user management. The backend for this has
already been decided.
A GET call to the corresponding endpoint returns :

{
  “data”: {
    “memberCount”: 3,
    “members”: [
      {
        “user”: {
          “created”: “2022-03-14T12:29:27.446531Z”,
          “email”: “hermann@supercomp.com”,
          “firstName”: “hermann”,
          “lastName”: “mustermann”,
          “userId”: “e0250d1c-773e-4f6c-a64d-11587488e222&quot;
        }
      },
      {
        “user”: {
          “created”: “2022-03-14T10:49:55.143462Z”,
          “email”: “klaus@supercomp.com”,
          “firstName”: “klaus”,
          “lastName”: “mustermann”,
          “userId”: “c9a228e9-47dd-4082-bdca-4de48d0c0916”
        }
      },
      {
        “user”: {
          “created”: “2022-03-14T10:49:55.143462Z”,
          “email”: “fritz@supercomp.com”,
          “firstName”: “fritz”,
          “lastName”: “mustermann”,
          “userId”: “c9a228e9-47dd-4082-bdca-4de48d0c0916&quot;
        }
      }
    ]
  }
}

Display the users in a list. If you click on one of the users, a dialogue with user details
should open.
b) Furthermore, it should be possible to change the first and last name of a user.
Think of a possible REST call and simulate it.
c) Think about an architecture that follows the basic rules of software development
(SOLID).
