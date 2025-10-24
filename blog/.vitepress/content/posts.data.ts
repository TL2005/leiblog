import { createContentLoader } from 'vitepress'

export default createContentLoader(['articles/**/*.md', '!articles/**/index.md'], {
  excerpt: true,    // 包含摘要
  transform(rawData) {
    // 按官方文档推荐的方式处理数据
    return rawData
      .map((page: any) => {
        const { frontmatter } = page
        
        // 处理日期：优先使用 frontmatter.date
        const date = frontmatter.date || null
        
        // 处理分类：支持 category 单个字段或 categories 数组字段
        let category = null
        if (frontmatter.category) {
          category = frontmatter.category
        } else if (Array.isArray(frontmatter.categories) && frontmatter.categories.length > 0) {
          category = frontmatter.categories[0] // 取第一个分类作为主分类
        }
        
        return {
          title: frontmatter.title || 'Untitled',
          url: page.url,
          date,
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
          category,
          excerpt: page.excerpt || ''
        }
      })
      .sort((a, b) => {
        // 按日期倒序排列
        const dateA = a.date ? new Date(a.date).getTime() : 0
        const dateB = b.date ? new Date(b.date).getTime() : 0
        return dateB - dateA
      })
  }
})