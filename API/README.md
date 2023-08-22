# Yatech Challenge (API)

## Folder Structure

    ├── config
    ├── controller/
    │   ├── query
    |   └── validation
    ├── docs
    ├── middleware
    ├── routes
    └── utils

| Directory                 | Descriptio                                     |
| ------------------------- | ---------------------------------------------- |
| **config**                | Define configuration and get value from `.env` |
| **controller**            | Business logic function                        |
| **controller/query**      | Define query to fetch from database            |
| **controller/validation** | Validate request                               |
| **docs**                  | API documentation                              |
| **middleware**            | Middleware authorization                       |
| **routes**                | Routing endpoint                               |
| **utils**                 | Common function and constanta                  |

## 🚀 Step to Run (First Time)

- Clone the yatech-studio-challenge repository

```
git clone git@github.com:Hulhay/yatech-studio-challenge.git
```

- move to API directory

```
cd API
```

- install all dependency

```
npm install
```

- create new database and table. You can use this script to create the table

```
CREATE TABLE users (
	id int primary key auto_increment not null,
	name varchar(255) not null,
	email varchar(255) not null,
	password varchar(255) not null
);
```

- create .env file

```
cp .env.example .env
```

- fill the .env file with your configuration

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=

JWT_PRIVATE_ACCESS_KEY=
JWT_PRIVATE_REFRESH_KEY=
JWT_EXP_ACCESS_TOKEN=15m
JWT_EXP_REFRESH_TOKEN=30d
```

- run the project

```
npm run start
```

## 🚀 Step to Run (Second Time and So On)

- run the project

```
npm run start
```
