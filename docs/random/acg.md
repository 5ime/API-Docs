---
pageClass: routes
---

# 随机动漫图 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/acg
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/acg -X POST -d 'format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| format | string | 否 | 返回数据格式, 可选值 `json` 默认返回图片 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "width": 1920,
    "height": 1200,
    "url": "https://tvax1.sinaimg.cn/large/9bd9b167gy1g4lhi9v5wdj21hc0xcamc.jpg"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| width | int | 图片宽度 |
| height | int | 图片高度 |
| url | string | 图片地址 |

<ads></ads>