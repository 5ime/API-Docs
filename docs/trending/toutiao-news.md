---
pageClass: routes
---

# 今日头条热点新闻 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/toutiaohotnew
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/toutiaohotnew
```

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": [
    {
      "name": "联播+｜开年首次会见外宾 都谈了哪些话题？",
      "url": "https://www.toutiao.com/article/7185059366666617402"
    },
    {
      "name": "人民日报评论员：今天的中国，是紧密联系世界的中国",
      "url": "https://www.toutiao.com/article/7185091192370037259"
    },
    {
      "name": "开局之年看中国丨2023 欣欣向“春”",
      "url": "https://www.toutiao.com/article/7185038154007659012"
    },
    {
      "name": "韩国人性与欲望交织的伦理片，揭露中年夫妻的心酸，现实又残酷！",
      "url": "https://www.toutiao.com/article/7185092632622662178"
    },
    {
      "name": "突发！美国加州宣布进入紧急状态！",
      "url": "https://www.toutiao.com/article/7185063662787543589"
    },
    {
      "name": "奔着谭松韵看的《向风而行》，却被三位空姐圈粉了，颜值都很高",
      "url": "https://www.toutiao.com/article/7185109154502197772"
    },
    {
      "name": "美国犹他州一住宅内8人死于枪击 包括5名儿童",
      "url": "https://www.toutiao.com/article/7185068297186968068"
    },
    {
      "name": "老人不是国家负担，全社会发扬孝道，保护老人们远离新冠病毒！",
      "url": "https://www.toutiao.com/article/7185091425745699362"
    },
    {
      "name": "感染破千万后，上海终于发大招！该来的果然来了！",
      "url": "https://www.toutiao.com/article/7184825598756586043"
    },
    {
      "name": "冲上热搜！付豪从钩机到椰汁，张镇麟模仿，与大嫂联动相约拍摄",
      "url": "https://www.toutiao.com/article/7185118704999531040"
    },
    {
      "name": "小伙的爷爷和爸妈5天内相继离世，政府部门：将尽力帮助这家人",
      "url": "https://www.toutiao.com/article/7185062626014331453"
    },
    {
      "name": "刘亦菲《去有风的地方》成功出圈，吴倩演技收获好评",
      "url": "https://www.toutiao.com/article/7185109323876450831"
    }
  ]
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| name | string | 热点文章标题 |
| url | string | 热点文章链接 |

<ads></ads>