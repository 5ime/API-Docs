---
pageClass: routes
---

# 二维码生成 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/qrcode
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/qrcode -X POST -d 'text=helloworld&size=100&format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 二维码内容 |
| size | int | 否 | 二维码大小 |
| format | string | 否 | 返回数据格式, 可选值 `json` 默认返回图片 |

## 返回数据

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "text": "helloworld",
    "img": "base64编码的图片"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| text | string | 二维码内容 |
| img | string | base64编码的图片 |

<ads></ads>