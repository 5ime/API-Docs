# Bilibili用户信息获取 <Badge text="正常" type="tip"/>
## 请求URL

``` 
https://tenapi.cn/bilibili/
```
## 请求示例 <Badge text="GET" type="warning"/> 
``` 
https://tenapi.cn/bilibili/?uid=1
```
## 返回数据 <Badge text="JSON" type="warning"/>
``` json
{
  "code": 200,
  "data": {
    "uid": "1",
    "name": "bishi",
    "level": 4,
    "sex": "男",
    "description": "",
    "avatar": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif"
  }
}
```
## 调用效果
`暂无`
## 请求参数
|参数名称|类型|参数值|    描述    |
|-----:|:-:|:--:|----------:|
| uid | 必填 | uid | 	需要获取信息的用户UID |

<ads></ads>