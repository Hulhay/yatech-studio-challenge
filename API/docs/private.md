# Private API

<details>
  <summary>Private</summary>

# Private

## Decription

| Method   | URL                     | Description                   |
| -------- | ----------------------- | ----------------------------- |
| **GET** | `/api/v1/private` | Endpoint to get private message |

## Header Parameter

| Parameter | Type        | Description |
| --------- | ----------- | ----------- |
| Authorization | string | Auth bearer |

## Example Request

```
curl --location --request GET '{base_url}/api/v1/private' \
--header 'Authorization: Bearer this.Is.Access.Token.123'
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
        "message": "Hello Yatech Studio. User with email pras.dev@gmail.com success to access"
    },
    "data": null
}
```

### 401

```
{
    "meta": {
        "code": 401,
        "message": "authorization is empty"
    },
    "data": null
}
```

### 403

```
{
    "meta": {
        "code": 403,
        "message": "invalid token"
    },
    "data": null
}
```