---
pageClass: routes
---

# 哔哩哔哩用户信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/biliinfo
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/biliinfo -X POST -d 'uid=1'
```

## 请求参数

> 标红部分即为用户 ID<br />https://space.bilibili.com/<span style="color:#E53333;">1</span>

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | 哔哩哔哩用户 ID |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "uid": "1",
    "name": "bishi",
    "level": 5,
    "sex": "保密",
    "avatar": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
    "sign": "",
    "fans": 163879,
    "follow": 5,
    "whisper": 0,
    "black": 0
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uid | int | 用户 ID |
| name | string | 用户昵称 |
| level | int | 用户等级 |
| sex | string | 用户性别 |
| avatar | string | 用户头像 |
| sign | string | 用户签名 |
| fans | int | 粉丝数 |
| follow | int | 关注数 |
| whisper | int | 私密关注数 |
| black | int | 黑名单数 |

<ads></ads>