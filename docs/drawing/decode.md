---
pageClass: routes
---

# 二维码解码 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/decode
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/decode -X POST -d 'url=https://bj.bcebos.com/qr-code/23010522c61ce635ce7d.jpg'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 二维码图片地址 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "url": "https://bj.bcebos.com/qr-code/23010522c61ce635ce7d.jpg",
    "text": "测试",
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| url | string | 二维码图片地址 |
| text | string | 二维码内容 |

<ads></ads>