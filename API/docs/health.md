# Health API

<details>
  <summary>Health</summary>

# Health

## Decription

| Method   | URL                     | Description                   |
| -------- | ----------------------- | ----------------------------- |
| **GET** | `/api/v1/health` | Endpoint to check health |

## Example Request

```
curl --location --request GET '{base_url}/api/v1/health' \
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
        "message": "I am feeling fine"
    },
    "data": null
}
```