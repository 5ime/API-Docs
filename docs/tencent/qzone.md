---
pageClass: routes
---

# QQ空间信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/qzone
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/qzone -X POST -d 'qq=123456'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qq | int | 是 | QQ号 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "qq": "123456",
    "name": "腾讯视频",
    "img": "https://q1.qlogo.cn/g?b=qq&k=ib0ts0Uexd5Rcic68bVuREwg&kti=Y7bM6AAAAAI&s=140",
    "mail": "123456@qq.com"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| qq | string | QQ号 |
| name | string | QQ昵称 |
| img | string | QQ头像 |
| mail | string | QQ邮箱 |

<ads></ads>