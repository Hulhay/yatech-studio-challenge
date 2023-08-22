# Auth API

<details>
  <summary>Register</summary>

# Register

## Decription

| Method   | URL                     | Description                   |
| -------- | ----------------------- | ----------------------------- |
| **POST** | `/api/v1/auth/register` | Endpoint to register new user |

## Request Parameter

### Body

| Parameter | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| name      | string | yes      | User name     |
| email     | string | yes      | User e-mail   |
| password  | string | yes      | User password |

## Example Request

```
curl --location --request POST '{base_url}/api/v1/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "pras dev",
    "email": "pras.dev@gmail.com",
    "password": "12345678"
}'
```

## Response Parameter

| Parameter | Type        | Description |
| --------- | ----------- | ----------- |
| meta      | meta object | Meta object |
| data      | data object | null        |

**Meta Object Contains :**
| Parameter | Type | Description |
|----------|----------|----------|
| code | number | HTTP status code |
| message | string | Message |

## Example Response

### 200

```
{
    "meta": {
        "code": 200,
        "message": "success"
    },
    "data": null
}
```

### 422

```
{
    "meta": {
        "code": 422,
        "message": "name cannot be empty",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "email cannot be empty",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "invalid email format",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "password cannot be empty",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "password must have a minimum of 8 characters",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "email already exists",
    },
    "data": null
}
```

### 500

```
{
    "meta": {
        "code": 500,
        "message": "failed to register",
    },
    "data": null
}
```

</details>

---

<details>
  <summary>Login</summary>

# Login

## Decription

| Method   | URL                  | Description            |
| -------- | -------------------- | ---------------------- |
| **POST** | `/api/v1/auth/login` | Endpoint to login user |

## Request Parameter

### Body

| Parameter | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| email     | string | yes      | User e-mail   |
| password  | string | yes      | User password |

## Example Request

```
curl --location --request POST '{base_url}/api/v1/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "pras.dev@gmail.com",
    "password": "12345678"
}'
```

## Response Parameter

| Parameter | Type        | Description |
| --------- | ----------- | ----------- |
| meta      | meta object | Meta object |
| data      | data object | Data object |

**Meta Object Contains :**
| Parameter | Type | Description |
|----------|----------|----------|
| code | number | HTTP status code |
| message | string | Message |

**Data Object Contains :**
| Parameter | Type | Description |
|----------|----------|----------|
| access_token | string | JWT token |
| refresh_token | string | JWT refresh token |

## Example Response

### 200

```
{
    "meta": {
        "code": 200,
        "message": "success"
    },
    "data": {
        "access_token": "this.Is.Access.Token.123",
        "refresh_token": "this.Is.Refresh.Token.456"
    }
}
```

### 404

```
{
    "meta": {
        "code": 404,
        "message": "email not found",
    },
    "data": null
}
```

### 422

```
{
    "meta": {
        "code": 422,
        "message": "email cannot be empty",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "invalid email format",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "password cannot be empty",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "wrong password",
    },
    "data": null
}
```

### 500

```
{
    "meta": {
        "code": 500,
        "message": "failed to login",
    },
    "data": null
}
```

</details>

---

<details>
  <summary>Refresh Token</summary>

# Refresh Token

## Decription

| Method   | URL                          | Description                      |
| -------- | ---------------------------- | -------------------------------- |
| **POST** | `/api/v1/auth/refresh-token` | Endpoint to refresh access token |

## Request Parameter

### Body

| Parameter     | Type   | Required | Description   |
| ------------- | ------ | -------- | ------------- |
| refresh_token | string | yes      | Refresh token |

## Example Request

```
curl --location --request POST '{base_url}/api/v1/auth/refresh-token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "refresh_token": "this.Is.Refresh.Token.456"
}'
```

## Response Parameter

| Parameter | Type        | Description |
| --------- | ----------- | ----------- |
| meta      | meta object | Meta object |
| data      | data object | Data object |

**Meta Object Contains :**
| Parameter | Type | Description |
|----------|----------|----------|
| code | number | HTTP status code |
| message | string | Message |

**Data Object Contains :**
| Parameter | Type | Description |
|----------|----------|----------|
| access_token | string | New JWT token |

## Example Response

### 200

```
{
    "meta": {
        "code": 200,
        "message": "success"
    },
    "data": {
        "accessToken": "this.Is.New.Access.Token.123456"
    }
}
```

### 422

```
{
    "meta": {
        "code": 422,
        "message": "token cannot be empty",
    },
    "data": null
}
```

```
{
    "meta": {
        "code": 422,
        "message": "invalid refresh token",
    },
    "data": null
}
```

</details>
