---
pageClass: routes
---

# 微博用户信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/myweibo
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/myweibo -X POST -d 'uid=1111681197'
```

## 请求参数

> 标红部分即为用户 ID<br />https://weibo.com/<span style="color:#E53333;">1111681197</span>

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | 微博用户 ID |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "uid": 1111681197,
    "name": "来去之间",
    "desc": "本社区居委会王大伯",
    "avatar": "https://tvax1.sinaimg.cn/crop.0.0.1005.1005.180/4242e8adly8h8v5oisct4j20rx0rxgny.jpg?KID=imgbed,tva&Expires=1677681282&ssig=G9f9%2B99Jwq",
    "follow": 5816,
    "fans": "105.3万",
    "verify": "移动互联网分析师",
    "regtime": "2009-08-28",
    "credit": "信用极好",
    "sex": "男",
    "birthday": "金牛座",
    "location": "北京",
    "ip": "北京",
    "home": "北京",
    "company": "四通利方",
    "sign": {
      "city": {
        "count": "去过的城市、国家·61个",
        "list": [
          {
            "title": "北京",
            "count": "742次",
            "lasttime": "2-21"
          },
          {
            "title": "延边朝鲜族自治州",
            "count": "1次",
            "lasttime": "1-29"
          },
          {
            "title": "哈尔滨",
            "count": "4次",
            "lasttime": "1-27"
          }
        ]
      },
      "location": {
        "count": "去过的地点·400个",
        "list": [
          {
            "title": "北京市出入境管理局",
            "count": "1次",
            "lasttime": "2-21"
          },
          {
            "title": "雪乡国家森林公园-双峰林场",
            "count": "1次",
            "lasttime": "1-29"
          },
          {
            "title": "冰雪大世界",
            "count": "1次",
            "lasttime": "1-27"
          },
          {
            "title": "索菲亚广场",
            "count": "1次",
            "lasttime": "1-26"
          },
          {
            "title": "澳门teamLab超自然空间",
            "count": "1次",
            "lasttime": "1-22"
          },
          {
            "title": "珠海长隆海洋王国-缤纷世界",
            "count": "1次",
            "lasttime": "1-17"
          },
          {
            "title": "新浪总部大厦",
            "count": "67次",
            "lasttime": "22-12-15"
          },
          {
            "title": "中粮·祥云小镇",
            "count": "4次",
            "lasttime": "22-10-27"
          },
          {
            "title": "北京迈基诺基因科技股份有限公司医学检验所核酸采样点",
            "count": "1次",
            "lasttime": "22-10-5"
          },
          {
            "title": "启皓北京",
            "count": "1次",
            "lasttime": "22-9-29"
          },
          {
            "title": "中国国际展览中心顺义新馆",
            "count": "1次",
            "lasttime": "22-9-11"
          },
          {
            "title": "北京王府中西医结合医院",
            "count": "1次",
            "lasttime": "22-9-10"
          },
          {
            "title": "北京电视台",
            "count": "1次",
            "lasttime": "22-8-15"
          },
          {
            "title": "北京广播电视台",
            "count": "1次",
            "lasttime": "22-8-14"
          },
          {
            "title": "日月潭风景区",
            "count": "1次",
            "lasttime": "22-8-7"
          },
          {
            "title": "老诚一锅",
            "count": "1次",
            "lasttime": "22-7-26"
          },
          {
            "title": "昆明长水国际机场",
            "count": "1次",
            "lasttime": "22-7-23"
          },
          {
            "title": "腾冲和顺柏联精品酒店",
            "count": "1次",
            "lasttime": "22-7-22"
          },
          {
            "title": "北京雁栖酒店",
            "count": "2次",
            "lasttime": "22-7-9"
          },
          {
            "title": "中粮·祥云小镇",
            "count": "1次",
            "lasttime": "22-7-2"
          }
        ]
      }
    }
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uid | int | 用户 ID |
| name | string | 用户昵称 |
| desc | string | 用户简介 |
| avatar | string | 用户头像 |
| follow | int | 关注数 |
| fans | string | 粉丝数 |
| verify | string | 认证信息 |
| regtime | string | 注册时间 |
| credit | string | 信用等级 |
| sex | string | 性别 |
| birthday | string | 生日 |
| location | string | 所在地 |
| ip | string | IP 归属地 |
| home | string | 家乡 |
| company | string | 公司 |
| sign | object | 签到信息 |
| sign.city | object | 城市签到信息 |
| sign.city.count | string | 签到城市数 |
| sign.city.list | array | 签到城市列表 |
| sign.city.list.title | string | 签到城市名称 |
| sign.city.list.count | string | 签到次数 |
| sign.city.list.lasttime | string | 最后签到时间 |
| sign.location | object | 地点签到信息 |
| sign.location.count | string | 签到地点数 |
| sign.location.list | array | 签到地点列表 |
| sign.location.list.title | string | 签到地点名称 |
| sign.location.list.count | string | 签到次数 |
| sign.location.list.lasttime | string | 最后签到时间 |

<ads></ads>