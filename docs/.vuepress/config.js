module.exports = {
    title: 'TenAPI 使用文档',
    description: 'TenAPI 使用文档',
    base: '/',
    themeConfig: {
        repo: '5ime/API-Docs',
        editLinks: true,
        smoothScroll: true,
        docsDir: 'docs',
        locales: {
            '/': {
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '指南',
                        link: '/',
                    },
                    {
                        text: 'TenAPI',
                        link: 'https://tenapi.cn',
                    },
                    {
                        text: '留言反馈',
                        link: 'https://5ime.cn/guestbook',
                    },
                    {
                        text: '支持 TenAPI',
                        link: '/support/',
                    },
                ],
                sidebar: {
                    '/': [
                        {
                            title: '指南',
                            collapsable: true,
                            children: ['','update'],
                        },
                        {
                            title: '腾讯QQ',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'tencent/avatar',
                                'tencent/group-avatar',
                                'tencent/anon-avatar',
                                'tencent/qzone-avatar',
                                'tencent/qzone',
                                'tencent/group',
                                'tencent/detail-card',
                                'tencent/talk',
                            ],
                        },
                        {
                            title: '热点趋势',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'trending/baidu',
                                'trending/douyin',
                                'trending/weibo',
                                'trending/zhihu',
                                'trending/bilibili',
                                'trending/toutiao',
                                'trending/toutiao-news',
                            ],
                        },
                        {
                            title: '随机输出',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'random/yiyan',
                                'random/color',
                                'random/acg',
                            ],
                        },
                        {
                            title: '哔哩哔哩',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'bilibili/userinfo',
                                'bilibili/videoinfo',
                                'bilibili/weekly',
                            ],
                        },
                        {
                            title: '图像处理',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'drawing/ipinfo',
                                'drawing/poster',
                                'drawing/qrcode',
                                'drawing/decode',
                            ],
                        },
                        {
                            title: '实用接口',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'utility/getip',
                                'utility/shroturl',
                                'utility/weather',
                                'utility/nuisance',
                                'utility/bing',
                                'utility/history',
                                'utility/lanzou',
                                'utility/phone',
                                'utility/wechaturl',
                                'utility/mcuid',
                            ],
                        },
                        {
                            title: '网易云音乐',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'netease/comment',
                                'netease/mvinfo',
                                'netease/songinfo',
                                'netease/userinfo',
                            ],
                        },
                        {
                            title: '短视频去水印',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'watermark/video',
                                'watermark/images',
                            ],
                        },
                    ],
                },
            },
        },
    },
    head: [
        ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d3b3b1b968a56124689d1366adeacf8f";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`],
        ['script', {"data-ad-client": "ca-pub-1759509770249694", async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}],
        ['script', {}, '(adsbygoogle = window.adsbygoogle || []).push({});'],
    ]
};