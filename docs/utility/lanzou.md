---
pageClass: routes
---

# 蓝奏云文件直链 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/lanzou
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/lanzou -X POST -d 'url=https://xiaodao.lanzoux.com/iTusf0k5p9pa'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 蓝奏云分享链接 |

## 返回数据

``` json
{
  "date": "true",
  "msg": "获取成功",
  "data": {
    "name": "爱奇艺_v9.12.171.6597_(64)去广告绿色版.exe ",
    "time": "12 小时前 ",
    "author": "小刀娱乐网x6g.com ",
    "size": "58.2 M",
    "ext": ".exe ",
    "url": "https://i01.lanzoug.com/0105230096052130bb/2023/01/05/4d9f2679fb059aca678eedc64303aaf3.exe?st=wYTOpC_eN3INt-IMxPZAXg&e=1597909974&b=VFELblU3A1VWa1dkCzdXPwAeCTwEaVQ_bCXQNZQJ9VTI_c&fi=96052130&pid=13-255-255-955&up=2&mp=1&co=1"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| name | string | 文件名 |
| time | string | 上传时间 |
| author | string | 作者 |
| size | string | 文件大小 |
| ext | string | 文件后缀 |
| url | string | 文件直链 |

<ads></ads>