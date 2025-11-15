API Endpoints
| Method | Endpoint | Description | Request Body / Parameters | Example Usage |
|--------|----------|-------------|---------------------------|---------------|
| POST | /api/v1/create/user | Create a new user | { "title": "string", "body": "string" } | curl -X POST https://expressjs-mongodb.vercel.app/api/v1/create/user -H "Content-Type: application/json" -d '{"title": "User Title", "body": "User Body"}' |
| GET | /api/v1/getallinfo | Get all user information (with posts) | None | curl https://expressjs-mongodb.vercel.app/api/v1/getallinfo |
| GET | /api/v1/getByID/:userID | Get posts for a specific user by user ID | URL Parameter: userID (string) | curl https://expressjs-mongodb.vercel.app/api/v1/getByID/64f1a2b3c4d5e6f7g8h9i0j1 |
| GET | /api/v1/get/info | Get API status information | None | curl https://expressjs-mongodb.vercel.app/api/v1/get/info |
| PUT | /api/v1/update/user/:_id | Update a user by ID | URL Parameter: _id (string), Body: { "title": "string", "body": "string" } | curl -X PUT https://expressjs-mongodb.vercel.app/api/v1/update/user/64f1a2b3c4d5e6f7g8h9i0j1 -H "Content-Type: application/json" -d '{"title": "Updated Title", "body": "Updated Body"}' |
| DELETE | /api/v1/delete/user/:_id | Delete a user by ID | URL Parameter: _id (string) | curl -X DELETE https://expressjs-mongodb.vercel.app/api/v1/delete/user/64f1a2b3c4d5e6f7g8h9i0j1 |
| POST | /api/v1/create/post | Create a new post | { "title": "string", "content": "string", "userID": "string" } | curl -X POST https://expressjs-mongodb.vercel.app/api/v1/create/post -H "Content-Type: application/json" -d '{"title": "Post Title", "content": "Post Content", "userID": "64f1a2b3c4d5e6f7g8h9i0j1"}' |
| PUT | /api/v1/update/:_id | Update a post by ID | URL Parameter: _id (string), Body: { "title": "string", "content": "string" } | curl -X PUT https://expressjs-mongodb.vercel.app/api/v1/update/64f1a2b3c4d5e6f7g8h9i0j1 -H "Content-Type: application/json" -d '{"title": "Updated Post Title", "content": "Updated Post Content"}' |
| DELETE | /api/v1/delete/:_id | Delete a post by ID | URL Parameter: _id (string) | curl -X DELETE https://expressjs-mongodb.vercel.app/api/v1/delete/64f1a2b3c4d5e6f7g8h9i0j1 |
