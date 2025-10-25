// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // h函数
import { useData } from 'vitepress'
import MyLayout from "../components/MyLayout.vue";
import backtotop from "../components/Backtotop.vue";
import update from "../components/Update.vue"
import WalineComment from '../components/WalineComment.vue'

// 导入 Git 变更日志插件
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import './styles/index.css'
export default {
    extends: DefaultTheme,
    enhanceApp(ctx: any) {
        const { app, router } = ctx

        // 注册全局组件
        app.component('update' , update)
        app.component('WalineComment', WalineComment)

        // 注册 Git 变更日志插件，配置中文本地化
        app.use(NolebaseGitChangelogPlugin, {
            locales: {
                'zh-CN': {
                    changelog: {
                        title: '页面历史',
                        noData: '暂无最近变更历史',
                        lastEdited: '本页面最后编辑于 {{daysAgo}}',
                        lastEditedDateFnsLocaleName: 'zhCN',
                        viewFullHistory: '查看完整历史',
                        committedOn: '于 {{date}} 提交',
                    }
                }
            }
        })


        // 路由钩子处理（简化版本，移除 NProgress 以避免类型错误）
        router.onAfterRouteChanged = () => {
            if (typeof window !== 'undefined') {
                // 动态加载 busuanzi 统计脚本
                if (!document.querySelector('script[src*="busuanzi"]')) {
                    const script = document.createElement('script')
                    script.async = true
                    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
                    document.head.appendChild(script)
                }

                // 防御性调用 busuanzi
                setTimeout(() => {
                    if (typeof window !== 'undefined' && (window as any).busuanzi) {
                        try {
                            ;(window as any).busuanzi.fetch()
                        } catch (e) {
                            console.warn('Busuanzi fetch failed:', e)
                        }
                    }
                }, 1000)
            }
        }
    },
    Layout() {
        return h(MyLayout, null, {
            // 指定组件使用doc-footer-before插槽
            'doc-footer-before': () => h(backtotop),

            // 在文档底部自动添加 Waline 评论组件（支持禁用）
            'doc-after': () => {
                // 创建一个函数组件来访问页面数据
                return h({
                    setup() {
                        const { frontmatter } = useData()

                        // 如果页面设置了 comments: false，则不显示评论组件
                        if (frontmatter.value.comments === false) {
                            return () => null
                        }

                        // 否则显示评论组件
                        return () => h(WalineComment, {
                            serverURL: 'https://taolei.pp.ua/'
                        })
                    }
                })
            }
        })
    }
}
