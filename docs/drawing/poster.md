---
pageClass: routes
---

# 海报生成 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/poster
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/poster -X POST -d 'qrcode=二维码内容&title=标题&content=内容&site=网站标题&info=网站描述&author=作者&pic=https://gitcode.net/qq_44112897/imgbed/-/raw/master/comic/52.jpg&format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qrcode | string | 是 | 二维码内容 |
| title | string | 是 | 文章标题 |
| content | string | 是 | 文章内容 |
| site | string | 是 | 网站标题 |
| info | string | 是 | 网站描述 |
| author | string | 是 | 文章作者 |
| pic | string | 是 | 背景图链接 |
| format | string | 否 | 返回数据格式, 可选值 `json` 默认返回图片 |

## 返回数据
``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "img": "base64编码的图片"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| img | string | base64编码的图片 |

<ads></ads>