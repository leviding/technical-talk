const overviewArr = [
  './overview/javascript',
  './leetcode/',
]

const javascriptArr = [
    './javascript/getting-started',
    './javascript/first-steps',
]

const browserArr = [
    './browser/document',
]

const additionalArr = [
    './additional/frames-and-windows',
]

const leetcodeArr = [
  './leetcode/',
]

// const javascriptTutorial = [
//     '',
// ]

// const browserTutorial = [
//     '',
// ]

// const additionalTutorial = [
//     '',
// ]

module.exports = {
    title: '技术漫谈',
    description: '最新技术知识和趣闻。有温度，有知识，有态度。技术漫谈，新一代技术人的聚集地。',

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    base: '/technical-talk/',

    locales: {
        '/': {
        lang: 'zh-CN',
        title: '技术漫谈',
        description: '最新技术知识和技术趣闻',
        }
    },

    plugins: [
        ['@vuepress/google-analytics', {
          'ga': 'UA-92630037-1' // UA-00000000-0
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/active-header-links']
    ],

    markdown: {
      lineNumbers: true
    },

    themeConfig: {
        //repo: 'leviding/technical-talk',
        docsRepo: 'leviding/technical-talk',
        docsDir: 'docs',
        lastUpdated: '上次更新',
        editLinks: true,
        markdown: {
          html: true,
          // config: md => {
          //   // 使用更多的 markdown-it 插件!
          //   md.use(require('markdown-it-katex'))
          // }
        },
        locales: {
          '/': {
            lang: 'zh-CN',
            selectText: 'Languages',
            editLinkText: '在 GitHub 上编辑此页',
            title: '技术漫谈',
            description: '最新技术知识和技术趣闻。有温度，有知识，有态度。技术漫谈，新一代技术人的聚集地。',
            nav: [
              { text: 'Home', link: '/' },
              { text: '概览', link: '/overview/javascript' },
              { text: '编程基础', link: '/javascript/getting-started' },
              { text: '浏览器相关', link: '/browser/document' },
              { text: '实战教程', link: '/additional/frames-and-windows' },
              { text: '算法学习', link: '/leetcode/' },
              { text: 'GitHub', link: 'https://github.com/leviding/technical-talk' },
              { text: '我的博客', link: 'https://dingxuewen.com' },
              {
                text: '社交账号',
                items: [
                  { text: '知乎', link: 'https://www.zhihu.com/people/leviding/' },
                  { text: '掘金', link: 'https://juejin.im/user/589881b7128fe1006cbbacec/posts' },
                  { text: '微博', link: 'https://weibo.com/leviding' },
                  { text: 'Bilibili', link: 'https://space.bilibili.com/304586774' }
                ]
              }
            ],
            sidebar: {
              '/': [
                {
                  title: '概览',
                  collapsable: false,
                  children: overviewArr
                },
                {
                  title: 'JavaScript 编程语言',
                  collapsable: false,
                  children: javascriptArr
                },
                {
                  title: '浏览器：文档、事件和接口',
                  collapsable: false,
                  children: browserArr
                },
                {
                  title: '前端实战进阶教程',
                  collapsable: false,
                  children: additionalArr
                },
                {
                  title: 'LeetCode 算法题解',
                  collapsable: false,
                  children: leetcodeArr
                }
              ],
              // '/javascript/': [
              //   {
              //     title: 'JavaScript 权威教程',
              //     collapsable: false,
              //     children: javascriptTutorial
              //   }
              // ],
              // '/browser/': [
              //   {
              //     title: '浏览器：文档、事件和接口',
              //     collapsable: false,
              //     children: browserTutorial
              //   }
              // ],
              // '/additional/': [
              //   {
              //     title: '实战进阶教程',
              //     collapsable: false,
              //     children: additionalTutorial
              //   }
              // ]
            }
          }
        }
    }
}
