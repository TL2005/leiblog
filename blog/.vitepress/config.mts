import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
};

//import { devDependencies } from '../../package.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "leiblog",
  description: "lei的技术博客",
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
  themeConfig: {
    //左上角logo
    logo: '/logo.png',
    darkModeSwitchLabel: '深浅模式', 
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },
    //siteTitle: false, //标题隐藏
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 导航栏第一个项目，VitePress 版本号
      //{ text: `VitePress ${ devDependencies.vitepress.replace('^','') }`, link: 'https://vitepress.dev/zh/', noIcon: true },
      { text: '主页', link: '/' },
      { 
        text: '文章',items:[
          { text: '列表', link: '/articles/lists/' },
          { text: '分类', link: '/articles/category/' },
          { text: '标签', link: '/articles/tag/' },
          { text: '归档', link: '/articles/archive/' },
        ]
      },
      {
        text: '资料',items:[
          { text: '文档', link: '/series/docs/' },
          { text: '笔记', link: '/series/notes/' },
        ]
      },
      {
        text: '娱乐',items:[
          { text: '电视剧', link: '/fun/tv-shows/' },
          { text: '电影', link: '/fun/movies/' },
          { text: '音乐', link: '/fun/music/' },
        ]
      },
      {
        text: '站点',items:[
          { text: '关于本站', link: '/site/about/' },
          { text: '作者主页', link: '/site/author/' },
          { text: '留言板', link: '/site/message/' },
        ]
      }

    ],

    sidebar: generateSidebar([
      {
        // 将 .vitepress 所在目录作为根（相对于项目根目录）
        documentRootPath: 'blog',
        // 只扫描 series/docs 下的内容
        scanStartPath: 'series/docs',
        // 生成的链接前缀为 /series/docs/
        resolvePath: '/series/docs/',
        // 展示行为保持与原配置一致
        collapsed: false,
        collapseDepth: 2,
        removePrefixAfterOrdering: false,
        prefixSeparator: '.',
      },
      {
        documentRootPath: 'blog',
        scanStartPath: 'series/notes',
        resolvePath: '/series/notes/',
        collapsed: false,
        collapseDepth: 2,
        removePrefixAfterOrdering: false,
        prefixSeparator: '.',
      }
    ]),

    socialLinks: [ 
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }, 
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },  
    ],
    footer: { 
      message: 'Released under the MIT License.', 
      //copyright: 'Copyright © 2019-2023 present Evan You', 
      // 自动更新时间
      copyright: `Copyright © 2024-${new Date().getFullYear()} TAOLEI`, 
    }, 
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    /* editLink: { 
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }, */
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    },
    
  }
})
