# Node.js Basic

A simple API project using [Node.js](https://nodejs.org/).

## Install

Clone this project

```
git clone git@github.com:samuelramox/node-basic.git
```

Install the dependencies

```
npm i
```

You need to put the database password (I use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) and token for `jsonwebtoken` in the [config.js](config/config.js) file

```
const bd_password = '';
const jwt_password = '';
```

Finally, run this project:

```
npm run start
```

## Resources:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [MongoDB](https://www.mongodb.com)
