---
pageClass: routes
---

# 网易云用户信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/mywyy
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/mywyy -X POST -d 'uid=1'
```

## 请求参数

> 标红部分即为用户 ID<br />https://music.163.com/#/user/home?id=<span style="color:#E53333;">1</span>

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | 网易云用户 ID |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "uid": 1,
    "name": "网易云音乐",
    "avatar": "http://p1.music.126.net/kMuXXbwHbduHpLYDmHXrlA==/109951168152833223.jpg",
    "sign": "网易云音乐是8亿人都在使用的音乐平台，致力于帮助音乐爱好者发现音乐惊喜，帮助音乐人实现梦想。 \n2019年8月31日起，将不再提供实时在线人工服务。您可以优先通过自助方式解决问题，如仍需求助，可在相关页面留下您的问题，后续会有人工为您解答，辛苦您耐心等待，给您带来的不便敬请谅解。 如果仍然不能解决您的问题，可以邮件我们： 用户：ncm5990@163.com 音乐人：yyr599@163.com",
    "level": 10,
    "background": "http://p1.music.126.net/cwi82gitJJ0DfMO4cXbP8A==/109951166515550955.jpg",
    "follow": 492,
    "fans": 99999
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uid | int | 用户 ID |
| name | string | 用户昵称 |
| avatar | string | 用户头像 |
| sign | string | 用户签名 |
| level | int | 用户等级 |
| background | string | 用户背景图 |
| follow | int | 用户关注数 |
| fans | int | 用户粉丝数 |

<ads></ads>