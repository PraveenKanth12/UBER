## /users/register Endpoint

### Description
This endpoint is used to register a new user in the system.

### Request
- **Method:** POST
- **URL:** `/users/register`
- **Content-Type:** `application/json`

### Request Body
The request body must contain the following fields in JSON format:
- `username` (string, required): The desired username for the new user.
- `password` (string, required): The desired password for the new user.
- `email` (string, required): The email address of the new user.

Example:
```json
{
  "username": "newUser",
  "password": "newPassword",
  "email": "newUser@example.com"
}
```

### Response
- **Status Code:** `201 Created` if the user is successfully registered.
- **Status Code:** `400 Bad Request` if the request body is invalid or missing required fields.

## /users/login Endpoint

### Description
This endpoint is used to authenticate a user and provide a token for accessing protected resources.

### Request
- **Method:** POST
- **URL:** `/users/login`
- **Content-Type:** `application/json`

### Request Body
The request body must contain the following fields in JSON format:
- `username` (string, required): The username of the user.
- `password` (string, required): The password of the user.

Example:
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```