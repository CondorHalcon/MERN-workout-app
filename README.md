# MERN Workout App

Built following [MERN Stack Crash Course Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE) with [Bootstrap](https://getbootstrap.com/) 5 addded.

Tutorial Repo: [@iamshaunjp/MERN-Stack-Tutorial](https://github.com/iamshaunjp/MERN-Stack-Tutorial).

## Tech Stack (MERN)

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
  - [Bootstrap](https://getbootstrap.com/)@[5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Node.js](https://nodejs.org/en/)@[20.x](https://nodejs.org/docs/latest-v20.x/api/index.html)

###### Utility
- [nodemon](https://nodemon.io/)

## API

### `GET /api/workouts/`

###### Response

```js
200 Ok
```

```json
[
	{
		"title": "squats",
		"load": 160,
		"reps": 10,
		"_id": "62a5e78b52e9b5f0af9364d0",
		"createdAt": "2022-06-12T13:18:03.183Z",
		"updatedAt": "2022-06-12T13:18:03.183Z"
	},
	{
		"title": "bench press",
		"load": 115,
		"reps": 10,
		"_id": "62a5e78b52e9b5f0af9364d0",
		"createdAt": "2022-06-12T13:18:03.183Z",
		"updatedAt": "2022-06-12T13:18:03.183Z"
	},
	{
		"title": "pull ups",
		"load": 0,
		"reps": 10,
		"_id": "62a5e78b52e9b5f0af9364d0",
		"createdAt": "2022-06-12T13:18:03.183Z",
		"updatedAt": "2022-06-12T13:18:03.183Z"
	}
]
```

### `POST /api/workouts/`

```json
{
	"title": "squats",
	"load": 160,
	"reps": 10
}
```

###### Response

```js
201 Created
```

```json
{
	"title": "squats",
	"load": 160,
	"reps": 10,
	"_id": "62a5e78b52e9b5f0af9364d0",
	"createdAt": "2022-06-12T13:18:03.183Z",
	"updatedAt": "2022-06-12T13:18:03.183Z"
}
```

or

```js
400 Bad Request
```

### `GET /api/workouts/:id`

###### Response

```js
200 Ok
```

```json
{
	"title": "squats",
	"load": 160,
	"reps": 10,
	"_id": "62a5e78b52e9b5f0af9364d0",
	"createdAt": "2022-06-12T13:18:03.183Z",
	"updatedAt": "2022-06-12T13:18:03.183Z"
}
```

or

```js
404 Not Found
```

```json
{
	"error": "Workout not found"
}
```

or

```js
400 Bad Request
```

```json
{
	"error": "Invalid wourkout id"
}
```

### `UPDATE /api/workouts/:id`

```json
{
	"reps": 15
}
```

###### Response

```js
200 Ok
```

```json
{
	"title": "squats",
	"load": 160,
	"reps": 10,
	"_id": "62a5e78b52e9b5f0af9364d0",
	"createdAt": "2022-06-12T13:18:03.183Z",
	"updatedAt": "2022-06-12T13:18:03.183Z"
}
```

or

```js
404 Not Found
```

or

```js
400 Bad Request
```

```json
{
	"error": "Invalid wourkout id"
}
```

### `DELETE /api/workouts/:id`

###### Response

```js
200 Ok
```

```json
{
	"title": "squats",
	"load": 160,
	"reps": 10,
	"_id": "62a5e78b52e9b5f0af9364d0",
	"createdAt": "2022-06-12T13:18:03.183Z",
	"updatedAt": "2022-06-12T13:18:03.183Z"
}
```

or

```js
404 Not Found
```

or

```js
400 Bad Request
```

```json
{
	"error": "Invalid wourkout id"
}
```
