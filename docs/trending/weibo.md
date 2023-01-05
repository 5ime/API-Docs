---
pageClass: routes
---

# 微博热搜榜 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/weibohot
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/weibohot
```

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": [
    {
      "name": "少爷和我",
      "hot": "综艺 3212578",
      "url": "https://s.weibo.com/weibo?q=%23%E5%B0%91%E7%88%B7%E5%92%8C%E6%88%91%23&Refer=index"
    },
    {
      "name": "优衣库遭掀帘女子男友发声",
      "hot": "1917750",
      "url": "https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%A1%A3%E5%BA%93%E9%81%AD%E6%8E%80%E5%B8%98%E5%A5%B3%E5%AD%90%E7%94%B7%E5%8F%8B%E5%8F%91%E5%A3%B0%23&Refer=index"
    },
    {
      "name": "共话网络真善美",
      "hot": "1524875",
      "url": "https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%AF%9D%E7%BD%91%E7%BB%9C%E7%9C%9F%E5%96%84%E7%BE%8E%23&Refer=index"
    },
    {
      "name": "3女子吃自助餐吃掉100多只螃蟹",
      "hot": "1370783",
      "url": "https://s.weibo.com/weibo?q=%233%E5%A5%B3%E5%AD%90%E5%90%83%E8%87%AA%E5%8A%A9%E9%A4%90%E5%90%83%E6%8E%89100%E5%A4%9A%E5%8F%AA%E8%9E%83%E8%9F%B9%23&Refer=index"
    },
    {
      "name": "女子拒绝公开恋爱关系砍伤男友",
      "hot": "1007223",
      "url": "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%92%E7%BB%9D%E5%85%AC%E5%BC%80%E6%81%8B%E7%88%B1%E5%85%B3%E7%B3%BB%E7%A0%8D%E4%BC%A4%E7%94%B7%E5%8F%8B%23&Refer=index"
    },
    {
      "name": "苗苗说曾喜欢一个人十几年",
      "hot": "综艺 918228",
      "url": "https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E8%AF%B4%E6%9B%BE%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8D%81%E5%87%A0%E5%B9%B4%23&Refer=index"
    },
    {
      "name": "56岁岳父像90后与女婿似同龄人",
      "hot": "712507",
      "url": "https://s.weibo.com/weibo?q=%2356%E5%B2%81%E5%B2%B3%E7%88%B6%E5%83%8F90%E5%90%8E%E4%B8%8E%E5%A5%B3%E5%A9%BF%E4%BC%BC%E5%90%8C%E9%BE%84%E4%BA%BA%23&Refer=index"
    },
    {
      "name": "肯德基",
      "hot": "669909",
      "url": "https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%23&Refer=index"
    },
    {
      "name": "三亚民宿老板称一个月赚回三年亏损",
      "hot": "656484",
      "url": "https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%B0%91%E5%AE%BF%E8%80%81%E6%9D%BF%E7%A7%B0%E4%B8%80%E4%B8%AA%E6%9C%88%E8%B5%9A%E5%9B%9E%E4%B8%89%E5%B9%B4%E4%BA%8F%E6%8D%9F%23&Refer=index"
    },
    {
      "name": "于蕾任2023春晚总导演",
      "hot": "晚会 570944",
      "url": "https://s.weibo.com/weibo?q=%23%E4%BA%8E%E8%95%BE%E4%BB%BB2023%E6%98%A5%E6%99%9A%E6%80%BB%E5%AF%BC%E6%BC%94%23&Refer=index"
    },
    {
      "name": "新娘被要求坐主厅5小时脚不能沾地",
      "hot": "547419",
      "url": "https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E8%A2%AB%E8%A6%81%E6%B1%82%E5%9D%90%E4%B8%BB%E5%8E%855%E5%B0%8F%E6%97%B6%E8%84%9A%E4%B8%8D%E8%83%BD%E6%B2%BE%E5%9C%B0%23&Refer=index"
    },
    {
      "name": "NINEPERCENT粉丝应援曲我的少年",
      "hot": "音乐 510425",
      "url": "https://s.weibo.com/weibo?q=%23NINEPERCENT%E7%B2%89%E4%B8%9D%E5%BA%94%E6%8F%B4%E6%9B%B2%E6%88%91%E7%9A%84%E5%B0%91%E5%B9%B4%23&Refer=index"
    },
    {
      "name": "三亚春节20万一晚酒店已售罄",
      "hot": "456499",
      "url": "https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%98%A5%E8%8A%8220%E4%B8%87%E4%B8%80%E6%99%9A%E9%85%92%E5%BA%97%E5%B7%B2%E5%94%AE%E7%BD%84%23&Refer=index"
    },
    {
      "name": "哪本小说全网无代餐",
      "hot": "450910",
      "url": "https://s.weibo.com/weibo?q=%23%E5%93%AA%E6%9C%AC%E5%B0%8F%E8%AF%B4%E5%85%A8%E7%BD%91%E6%97%A0%E4%BB%A3%E9%A4%90%23&Refer=index"
    },
    {
      "name": "电费",
      "hot": "422503",
      "url": "https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%B4%B9%23&Refer=index"
    },
    {
      "name": "IVE假唱被KBS点名批评",
      "hot": "407071",
      "url": "https://s.weibo.com/weibo?q=%23IVE%E5%81%87%E5%94%B1%E8%A2%ABKBS%E7%82%B9%E5%90%8D%E6%89%B9%E8%AF%84%23&Refer=index"
    },
    {
      "name": "张文宏称社区医院治疗大多无效",
      "hot": "401035",
      "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%87%E5%AE%8F%E7%A7%B0%E7%A4%BE%E5%8C%BA%E5%8C%BB%E9%99%A2%E6%B2%BB%E7%96%97%E5%A4%A7%E5%A4%9A%E6%97%A0%E6%95%88%23&Refer=index"
    },
    {
      "name": "景向谁依晚会首秀",
      "hot": "晚会 362773",
      "url": "https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%90%91%E8%B0%81%E4%BE%9D%E6%99%9A%E4%BC%9A%E9%A6%96%E7%A7%80%23&Refer=index"
    },
    {
      "name": "建立首套住房贷款利率政策动态调整机制",
      "hot": "322927",
      "url": "https://s.weibo.com/weibo?q=%23%E5%BB%BA%E7%AB%8B%E9%A6%96%E5%A5%97%E4%BD%8F%E6%88%BF%E8%B4%B7%E6%AC%BE%E5%88%A9%E7%8E%87%E6%94%BF%E7%AD%96%E5%8A%A8%E6%80%81%E8%B0%83%E6%95%B4%E6%9C%BA%E5%88%B6%23&Refer=index"
    },
    {
      "name": "TheShy薇恩上单",
      "hot": "304745",
      "url": "https://s.weibo.com/weibo?q=%23TheShy%E8%96%87%E6%81%A9%E4%B8%8A%E5%8D%95%23&Refer=index"
    },
    {
      "name": "马嘉祺也在看少爷和我",
      "hot": "综艺 303256",
      "url": "https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B9%9F%E5%9C%A8%E7%9C%8B%E5%B0%91%E7%88%B7%E5%92%8C%E6%88%91%23&Refer=index"
    },
    {
      "name": "谭松韵台词功底",
      "hot": "剧集 302445",
      "url": "https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%8F%B0%E8%AF%8D%E5%8A%9F%E5%BA%95%23&Refer=index"
    },
    {
      "name": "上海电费",
      "hot": "302424",
      "url": "https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B5%E8%B4%B9%23&Refer=index"
    },
    {
      "name": "微博杯",
      "hot": "301110",
      "url": "https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%9D%AF%23&Refer=index"
    },
    {
      "name": "时代少年团全校通报以前叫娃娃",
      "hot": "295047",
      "url": "https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%85%A8%E6%A0%A1%E9%80%9A%E6%8A%A5%E4%BB%A5%E5%89%8D%E5%8F%AB%E5%A8%83%E5%A8%83%23&Refer=index"
    },
    {
      "name": "WBG对战EDGY",
      "hot": "287888",
      "url": "https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98EDGY%23&Refer=index"
    },
    {
      "name": "全国最脏的工作被江西小城包了",
      "hot": "283088",
      "url": "https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%9C%80%E8%84%8F%E7%9A%84%E5%B7%A5%E4%BD%9C%E8%A2%AB%E6%B1%9F%E8%A5%BF%E5%B0%8F%E5%9F%8E%E5%8C%85%E4%BA%86%23&Refer=index"
    },
    {
      "name": "酒精消毒喷剂可以带上高铁吗",
      "hot": "271911",
      "url": "https://s.weibo.com/weibo?q=%23%E9%85%92%E7%B2%BE%E6%B6%88%E6%AF%92%E5%96%B7%E5%89%82%E5%8F%AF%E4%BB%A5%E5%B8%A6%E4%B8%8A%E9%AB%98%E9%93%81%E5%90%97%23&Refer=index"
    },
    {
      "name": "对于购买第一套住房的要大力支持",
      "hot": "240201",
      "url": "https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BA%8E%E8%B4%AD%E4%B9%B0%E7%AC%AC%E4%B8%80%E5%A5%97%E4%BD%8F%E6%88%BF%E7%9A%84%E8%A6%81%E5%A4%A7%E5%8A%9B%E6%94%AF%E6%8C%81%23&Refer=index"
    },
    {
      "name": "20余名大哥抢救回800箱黄桃罐头",
      "hot": "223464",
      "url": "https://s.weibo.com/weibo?q=%2320%E4%BD%99%E5%90%8D%E5%A4%A7%E5%93%A5%E6%8A%A2%E6%95%91%E5%9B%9E800%E7%AE%B1%E9%BB%84%E6%A1%83%E7%BD%90%E5%A4%B4%23&Refer=index"
    },
    {
      "name": "丁程鑫47岁导演和20岁演员无缝切换",
      "hot": "221920",
      "url": "https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB47%E5%B2%81%E5%AF%BC%E6%BC%94%E5%92%8C20%E5%B2%81%E6%BC%94%E5%91%98%E6%97%A0%E7%BC%9D%E5%88%87%E6%8D%A2%23&Refer=index"
    },
    {
      "name": "张真源一掌把床拍塌了",
      "hot": "218367",
      "url": "https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E4%B8%80%E6%8E%8C%E6%8A%8A%E5%BA%8A%E6%8B%8D%E5%A1%8C%E4%BA%86%23&Refer=index"
    },
    {
      "name": "程霄当众承认喜欢顾南亭",
      "hot": "剧集 214903",
      "url": "https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9C%84%E5%BD%93%E4%BC%97%E6%89%BF%E8%AE%A4%E5%96%9C%E6%AC%A2%E9%A1%BE%E5%8D%97%E4%BA%AD%23&Refer=index"
    },
    {
      "name": "易烊千玺说沈腾在现场即兴很厉害",
      "hot": "电影 211002",
      "url": "https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%AF%B4%E6%B2%88%E8%85%BE%E5%9C%A8%E7%8E%B0%E5%9C%BA%E5%8D%B3%E5%85%B4%E5%BE%88%E5%8E%89%E5%AE%B3%23&Refer=index"
    },
    {
      "name": "这猫怎么有腋毛啊",
      "hot": "210853",
      "url": "https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%8C%AB%E6%80%8E%E4%B9%88%E6%9C%89%E8%85%8B%E6%AF%9B%E5%95%8A%23&Refer=index"
    },
    {
      "name": "虞书欣父母公司再成被执行人",
      "hot": "210152",
      "url": "https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E6%AF%8D%E5%85%AC%E5%8F%B8%E5%86%8D%E6%88%90%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%23&Refer=index"
    },
    {
      "name": "陆家嘴三件套石墩引游客火爆打卡",
      "hot": "209440",
      "url": "https://s.weibo.com/weibo?q=%23%E9%99%86%E5%AE%B6%E5%98%B4%E4%B8%89%E4%BB%B6%E5%A5%97%E7%9F%B3%E5%A2%A9%E5%BC%95%E6%B8%B8%E5%AE%A2%E7%81%AB%E7%88%86%E6%89%93%E5%8D%A1%23&Refer=index"
    },
    {
      "name": "上海电网回应电费涨价",
      "hot": "200589",
      "url": "https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B5%E7%BD%91%E5%9B%9E%E5%BA%94%E7%94%B5%E8%B4%B9%E6%B6%A8%E4%BB%B7%23&Refer=index"
    },
    {
      "name": "快看",
      "hot": "197549",
      "url": "https://s.weibo.com/weibo?q=%23%E5%BF%AB%E7%9C%8B%23&Refer=index"
    },
    {
      "name": "姐弟恋的结局是怎样的",
      "hot": "192922",
      "url": "https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%BC%9F%E6%81%8B%E7%9A%84%E7%BB%93%E5%B1%80%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84%23&Refer=index"
    },
    {
      "name": "许红豆说自己曾经是前台憋尿亚军",
      "hot": "剧集 190469",
      "url": "https://s.weibo.com/weibo?q=%23%E8%AE%B8%E7%BA%A2%E8%B1%86%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%9B%BE%E7%BB%8F%E6%98%AF%E5%89%8D%E5%8F%B0%E6%86%8B%E5%B0%BF%E4%BA%9A%E5%86%9B%23&Refer=index"
    },
    {
      "name": "北京WB阿豆挂牌",
      "hot": "184706",
      "url": "https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWB%E9%98%BF%E8%B1%86%E6%8C%82%E7%89%8C%23&Refer=index"
    },
    {
      "name": "新冠阳性大麦网拒绝退票",
      "hot": "170896",
      "url": "https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E9%98%B3%E6%80%A7%E5%A4%A7%E9%BA%A6%E7%BD%91%E6%8B%92%E7%BB%9D%E9%80%80%E7%A5%A8%23&Refer=index"
    },
    {
      "name": "刘春孔庆东等微博账号被禁言",
      "hot": "164534",
      "url": "https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%A5%E5%AD%94%E5%BA%86%E4%B8%9C%E7%AD%89%E5%BE%AE%E5%8D%9A%E8%B4%A6%E5%8F%B7%E8%A2%AB%E7%A6%81%E8%A8%80%23&Refer=index"
    },
    {
      "name": "5位退役也未曾飞天的航天员",
      "hot": "161619",
      "url": "https://s.weibo.com/weibo?q=%235%E4%BD%8D%E9%80%80%E5%BD%B9%E4%B9%9F%E6%9C%AA%E6%9B%BE%E9%A3%9E%E5%A4%A9%E7%9A%84%E8%88%AA%E5%A4%A9%E5%91%98%23&Refer=index"
    },
    {
      "name": "峨眉山最有礼貌的猴子",
      "hot": "153328",
      "url": "https://s.weibo.com/weibo?q=%23%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%9C%80%E6%9C%89%E7%A4%BC%E8%B2%8C%E7%9A%84%E7%8C%B4%E5%AD%90%23&Refer=index"
    },
    {
      "name": "杭州一KTV聘用6名未成年少女被罚",
      "hot": "153302",
      "url": "https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%80KTV%E8%81%98%E7%94%A86%E5%90%8D%E6%9C%AA%E6%88%90%E5%B9%B4%E5%B0%91%E5%A5%B3%E8%A2%AB%E7%BD%9A%23&Refer=index"
    },
    {
      "name": "和家境好的朋友相处会累吗",
      "hot": "153097",
      "url": "https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%AE%B6%E5%A2%83%E5%A5%BD%E7%9A%84%E6%9C%8B%E5%8F%8B%E7%9B%B8%E5%A4%84%E4%BC%9A%E7%B4%AF%E5%90%97%23&Refer=index"
    },
    {
      "name": "风情不摇晃作者曾回应相关争议",
      "hot": "152989",
      "url": "https://s.weibo.com/weibo?q=%23%E9%A3%8E%E6%83%85%E4%B8%8D%E6%91%87%E6%99%83%E4%BD%9C%E8%80%85%E6%9B%BE%E5%9B%9E%E5%BA%94%E7%9B%B8%E5%85%B3%E4%BA%89%E8%AE%AE%23&Refer=index"
    },
    {
      "name": "有哪些生了娃才知道的事",
      "hot": "152835",
      "url": "https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%93%AA%E4%BA%9B%E7%94%9F%E4%BA%86%E5%A8%83%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23&Refer=index"
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