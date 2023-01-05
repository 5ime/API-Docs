---
pageClass: routes
---

# 百度热搜榜 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/baiduhot
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/baiduhot
```

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": [
    {
      "name": "为啥12月的电费特别贵",
      "hot": "4940043",
      "url": "https://www.baidu.com/s?wd=%E4%B8%BA%E5%95%A512%E6%9C%88%E7%9A%84%E7%94%B5%E8%B4%B9%E7%89%B9%E5%88%AB%E8%B4%B5"
    },
    {
      "name": "多地明确春节返乡防控措施",
      "hot": "4820774",
      "url": "https://www.baidu.com/s?wd=%E5%A4%9A%E5%9C%B0%E6%98%8E%E7%A1%AE%E6%98%A5%E8%8A%82%E8%BF%94%E4%B9%A1%E9%98%B2%E6%8E%A7%E6%8E%AA%E6%96%BD"
    },
    {
      "name": "春运要来了，出行必看",
      "hot": "4724118",
      "url": "https://www.baidu.com/s?wd=%E6%98%A5%E8%BF%90%E8%A6%81%E6%9D%A5%E4%BA%86%EF%BC%8C%E5%87%BA%E8%A1%8C%E5%BF%85%E7%9C%8B"
    },
    {
      "name": "秦刚被免去驻美大使职务",
      "hot": "4643508",
      "url": "https://www.baidu.com/s?wd=%E7%A7%A6%E5%88%9A%E8%A2%AB%E5%85%8D%E5%8E%BB%E9%A9%BB%E7%BE%8E%E5%A4%A7%E4%BD%BF%E8%81%8C%E5%8A%A1"
    },
    {
      "name": "三亚民宿老板称一个月赚回三年亏损",
      "hot": "4579220",
      "url": "https://www.baidu.com/s?wd=%E4%B8%89%E4%BA%9A%E6%B0%91%E5%AE%BF%E8%80%81%E6%9D%BF%E7%A7%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%B5%9A%E5%9B%9E%E4%B8%89%E5%B9%B4%E4%BA%8F%E6%8D%9F"
    },
    {
      "name": "四川女子回娘家屋旁偶遇大熊猫",
      "hot": "4482358",
      "url": "https://www.baidu.com/s?wd=%E5%9B%9B%E5%B7%9D%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%A8%98%E5%AE%B6%E5%B1%8B%E6%97%81%E5%81%B6%E9%81%87%E5%A4%A7%E7%86%8A%E7%8C%AB"
    },
    {
      "name": "海航回应飞机上一旅客吸电子烟",
      "hot": "4323223",
      "url": "https://www.baidu.com/s?wd=%E6%B5%B7%E8%88%AA%E5%9B%9E%E5%BA%94%E9%A3%9E%E6%9C%BA%E4%B8%8A%E4%B8%80%E6%97%85%E5%AE%A2%E5%90%B8%E7%94%B5%E5%AD%90%E7%83%9F"
    },
    {
      "name": "新疆暴雪1米8小伙跳雪没过头顶",
      "hot": "4258187",
      "url": "https://www.baidu.com/s?wd=%E6%96%B0%E7%96%86%E6%9A%B4%E9%9B%AA1%E7%B1%B38%E5%B0%8F%E4%BC%99%E8%B7%B3%E9%9B%AA%E6%B2%A1%E8%BF%87%E5%A4%B4%E9%A1%B6"
    },
    {
      "name": "女子高铁投喂前座萌娃被回赠奶瓶",
      "hot": "4145293",
      "url": "https://www.baidu.com/s?wd=%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E6%8A%95%E5%96%82%E5%89%8D%E5%BA%A7%E8%90%8C%E5%A8%83%E8%A2%AB%E5%9B%9E%E8%B5%A0%E5%A5%B6%E7%93%B6"
    },
    {
      "name": "男子女装带娃体验全职妈妈",
      "hot": "4021667",
      "url": "https://www.baidu.com/s?wd=%E7%94%B7%E5%AD%90%E5%A5%B3%E8%A3%85%E5%B8%A6%E5%A8%83%E4%BD%93%E9%AA%8C%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88"
    },
    {
      "name": "住建部：对买首套住房的要大力支持",
      "hot": "3931001",
      "url": "https://www.baidu.com/s?wd=%E4%BD%8F%E5%BB%BA%E9%83%A8%EF%BC%9A%E5%AF%B9%E4%B9%B0%E9%A6%96%E5%A5%97%E4%BD%8F%E6%88%BF%E7%9A%84%E8%A6%81%E5%A4%A7%E5%8A%9B%E6%94%AF%E6%8C%81"
    },
    {
      "name": "拜登担忧中国处理新冠方式 中方回应",
      "hot": "3824795",
      "url": "https://www.baidu.com/s?wd=%E6%8B%9C%E7%99%BB%E6%8B%85%E5%BF%A7%E4%B8%AD%E5%9B%BD%E5%A4%84%E7%90%86%E6%96%B0%E5%86%A0%E6%96%B9%E5%BC%8F+%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94"
    },
    {
      "name": "出版社回应小说被批歌颂毒枭爱情",
      "hot": "3717026",
      "url": "https://www.baidu.com/s?wd=%E5%87%BA%E7%89%88%E7%A4%BE%E5%9B%9E%E5%BA%94%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%89%B9%E6%AD%8C%E9%A2%82%E6%AF%92%E6%9E%AD%E7%88%B1%E6%83%85"
    },
    {
      "name": "于蕾任2023春晚总导演",
      "hot": "3671714",
      "url": "https://www.baidu.com/s?wd=%E4%BA%8E%E8%95%BE%E4%BB%BB2023%E6%98%A5%E6%99%9A%E6%80%BB%E5%AF%BC%E6%BC%94"
    },
    {
      "name": "胡锡进：大家今年最好都能涨点工资",
      "hot": "3599827",
      "url": "https://www.baidu.com/s?wd=%E8%83%A1%E9%94%A1%E8%BF%9B%EF%BC%9A%E5%A4%A7%E5%AE%B6%E4%BB%8A%E5%B9%B4%E6%9C%80%E5%A5%BD%E9%83%BD%E8%83%BD%E6%B6%A8%E7%82%B9%E5%B7%A5%E8%B5%84"
    },
    {
      "name": "成都干部不雅聊天续：男方4日还参会",
      "hot": "3442039",
      "url": "https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E5%B9%B2%E9%83%A8%E4%B8%8D%E9%9B%85%E8%81%8A%E5%A4%A9%E7%BB%AD%EF%BC%9A%E7%94%B7%E6%96%B94%E6%97%A5%E8%BF%98%E5%8F%82%E4%BC%9A"
    },
    {
      "name": "新冠病毒很可能存在眼部趋向性",
      "hot": "3316726",
      "url": "https://www.baidu.com/s?wd=%E6%96%B0%E5%86%A0%E7%97%85%E6%AF%92%E5%BE%88%E5%8F%AF%E8%83%BD%E5%AD%98%E5%9C%A8%E7%9C%BC%E9%83%A8%E8%B6%8B%E5%90%91%E6%80%A7"
    },
    {
      "name": "男子网购20个26元扫地机器人",
      "hot": "3263498",
      "url": "https://www.baidu.com/s?wd=%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD20%E4%B8%AA26%E5%85%83%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA"
    },
    {
      "name": "98年哥哥返乡给15弟妹买一车礼物",
      "hot": "3183534",
      "url": "https://www.baidu.com/s?wd=98%E5%B9%B4%E5%93%A5%E5%93%A5%E8%BF%94%E4%B9%A1%E7%BB%9915%E5%BC%9F%E5%A6%B9%E4%B9%B0%E4%B8%80%E8%BD%A6%E7%A4%BC%E7%89%A9"
    },
    {
      "name": "风情不摇晃作者曾祝女孩活成毒品",
      "hot": "3032367",
      "url": "https://www.baidu.com/s?wd=%E9%A3%8E%E6%83%85%E4%B8%8D%E6%91%87%E6%99%83%E4%BD%9C%E8%80%85%E6%9B%BE%E7%A5%9D%E5%A5%B3%E5%AD%A9%E6%B4%BB%E6%88%90%E6%AF%92%E5%93%81"
    },
    {
      "name": "一中国公民在刚果（金）遭绑架遇害",
      "hot": "2967351",
      "url": "https://www.baidu.com/s?wd=%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%9C%A8%E5%88%9A%E6%9E%9C%EF%BC%88%E9%87%91%EF%BC%89%E9%81%AD%E7%BB%91%E6%9E%B6%E9%81%87%E5%AE%B3"
    },
    {
      "name": "安徽“药神”秦才东获刑后发声",
      "hot": "2807670",
      "url": "https://www.baidu.com/s?wd=%E5%AE%89%E5%BE%BD%E2%80%9C%E8%8D%AF%E7%A5%9E%E2%80%9D%E7%A7%A6%E6%89%8D%E4%B8%9C%E8%8E%B7%E5%88%91%E5%90%8E%E5%8F%91%E5%A3%B0"
    },
    {
      "name": "查尔斯国王曾恳请儿子们和解",
      "hot": "2701073",
      "url": "https://www.baidu.com/s?wd=%E6%9F%A5%E5%B0%94%E6%96%AF%E5%9B%BD%E7%8E%8B%E6%9B%BE%E6%81%B3%E8%AF%B7%E5%84%BF%E5%AD%90%E4%BB%AC%E5%92%8C%E8%A7%A3"
    },
    {
      "name": "三亚春节20万一晚酒店已售罄",
      "hot": "2611942",
      "url": "https://www.baidu.com/s?wd=%E4%B8%89%E4%BA%9A%E6%98%A5%E8%8A%8220%E4%B8%87%E4%B8%80%E6%99%9A%E9%85%92%E5%BA%97%E5%B7%B2%E5%94%AE%E7%BD%84"
    },
    {
      "name": "法律明令禁止未成年人进KTV",
      "hot": "2561428",
      "url": "https://www.baidu.com/s?wd=%E6%B3%95%E5%BE%8B%E6%98%8E%E4%BB%A4%E7%A6%81%E6%AD%A2%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E8%BF%9BKTV"
    },
    {
      "name": "男子刑满释放走出看守所又被带走",
      "hot": "2464633",
      "url": "https://www.baidu.com/s?wd=%E7%94%B7%E5%AD%90%E5%88%91%E6%BB%A1%E9%87%8A%E6%94%BE%E8%B5%B0%E5%87%BA%E7%9C%8B%E5%AE%88%E6%89%80%E5%8F%88%E8%A2%AB%E5%B8%A6%E8%B5%B0"
    },
    {
      "name": "女生回男友家过节后决定分手",
      "hot": "2324194",
      "url": "https://www.baidu.com/s?wd=%E5%A5%B3%E7%94%9F%E5%9B%9E%E7%94%B7%E5%8F%8B%E5%AE%B6%E8%BF%87%E8%8A%82%E5%90%8E%E5%86%B3%E5%AE%9A%E5%88%86%E6%89%8B"
    },
    {
      "name": "医保谈判首日灵魂砍价再现",
      "hot": "2210590",
      "url": "https://www.baidu.com/s?wd=%E5%8C%BB%E4%BF%9D%E8%B0%88%E5%88%A4%E9%A6%96%E6%97%A5%E7%81%B5%E9%AD%82%E7%A0%8D%E4%BB%B7%E5%86%8D%E7%8E%B0"
    },
    {
      "name": "浪莎回应郎朗吉娜代言一日游",
      "hot": "2130696",
      "url": "https://www.baidu.com/s?wd=%E6%B5%AA%E8%8E%8E%E5%9B%9E%E5%BA%94%E9%83%8E%E6%9C%97%E5%90%89%E5%A8%9C%E4%BB%A3%E8%A8%80%E4%B8%80%E6%97%A5%E6%B8%B8"
    },
    {
      "name": "泽连斯基称普京将再度大规模征兵",
      "hot": "2003366",
      "url": "https://www.baidu.com/s?wd=%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E7%A7%B0%E6%99%AE%E4%BA%AC%E5%B0%86%E5%86%8D%E5%BA%A6%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%BE%81%E5%85%B5"
    }
  ]
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| name | string | 热搜词 |
| hot | string | 热度 |
| url | string | 热搜词链接 |

<ads></ads>