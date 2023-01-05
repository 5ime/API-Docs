---
pageClass: routes
---

# 历史上的今天 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/history
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/history
```

## 返回数据

``` json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "today": "2023年01月05日",
    "list": [
      {
        "title": "勃艮第公爵查理二世逝世",
        "year": "1477",
        "url": "https://baike.baidu.com/item/%E6%9F%A5%E7%90%86%E4%BA%8C%E4%B8%96/10905793"
      },
      {
        "title": "我国明代旅行家徐霞客出生",
        "year": "1587",
        "url": "https://baike.baidu.com/item/%E5%BE%90%E9%9C%9E%E5%AE%A2"
      },
      {
        "title": "明朝将领戚继光逝世",
        "year": "1588",
        "url": "https://baike.baidu.com/item/%E6%88%9A%E7%BB%A7%E5%85%89/22374"
      },
      {
        "title": "诺贝尔文学奖得主奥伊肯出生",
        "year": "1794",
        "url": "https://baike.baidu.com/item/%E5%A5%A5%E4%BC%8A%E8%82%AF"
      },
      {
        "title": "X射线照片柏林物理学会会议上被展出",
        "year": "1895",
        "url": "https://baike.baidu.com/item/X%E5%B0%84%E7%BA%BF"
      },
      {
        "title": "逻辑学家斯蒂芬·科尔·克莱尼出生",
        "year": "1909",
        "url": "https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E7%A7%91%E5%B0%94%C2%B7%E5%85%8B%E8%8E%B1%E5%B0%BC"
      },
      {
        "title": "法国经济学家、开创了一般均衡理论的里昂·瓦尔拉斯逝世",
        "year": "1910",
        "url": "https://baike.baidu.com/item/%E9%87%8C%E6%98%82%C2%B7%E7%93%A6%E5%B0%94%E6%8B%89%E6%96%AF"
      },
      {
        "title": "南极探险家欧内斯特·沙克尔顿逝世",
        "year": "1922",
        "url": "https://baike.baidu.com/item/%E6%AC%A7%E5%86%85%E6%96%AF%E7%89%B9%C2%B7%E6%B2%99%E5%85%8B%E5%B0%94%E9%A1%BF"
      },
      {
        "title": "美国第42任副总统沃尔特·蒙代尔出生",
        "year": "1928",
        "url": "https://baike.baidu.com/item/%E6%B2%83%E5%B0%94%E7%89%B9%C2%B7%E8%92%99%E4%BB%A3%E5%B0%94"
      },
      {
        "title": "毛泽东撰写《星星之火，可以燎原》",
        "year": "1930",
        "url": "https://baike.baidu.com/item/%E6%98%9F%E6%98%9F%E4%B9%8B%E7%81%AB%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%87%8E%E5%8E%9F"
      },
      {
        "title": "金门大桥在旧金山湾开工",
        "year": "1933",
        "url": "https://baike.baidu.com/item/%E9%87%91%E9%97%A8%E5%A4%A7%E6%A1%A5/643"
      },
      {
        "title": "诺贝尔物理学奖得主马克斯·玻恩逝世",
        "year": "1970",
        "url": "https://baike.baidu.com/item/%E9%A9%AC%E5%85%8B%E6%96%AF%C2%B7%E7%8E%BB%E6%81%A9"
      },
      {
        "title": "《中华人民共和国环境保护法》施行",
        "year": "1990",
        "url": "https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%8E%AF%E5%A2%83%E4%BF%9D%E6%8A%A4%E6%B3%95"
      },
      {
        "title": "阋神星被美国天文学家发现",
        "year": "2005",
        "url": "https://baike.baidu.com/item/%E9%98%8B%E7%A5%9E%E6%98%9F"
      },
      {
        "title": "中国歼-10战机研制成功",
        "year": "2007",
        "url": "https://baike.baidu.com/item/%E6%AD%BC-10"
      }
    ]
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| today | string | 今天日期 |
| list | array | 事件列表 |
| list.title | string | 事件标题 |
| list.year | string | 事件年份 |
| list.url | string | 事件百度百科链接 |

<ads></ads>