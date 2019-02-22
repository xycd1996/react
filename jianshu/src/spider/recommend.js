import { Article } from '../static/js/recommend'

export function bannerSpider(res) {
  let bannerHtml = res.match(/desktop"><img src="[\S\s]+?" alt="540" \/>/g)
  let ret = []
  bannerHtml.forEach(item => {
    ret = [...ret, item.match(/\/\/([\S\s])+?\/540/g)]
  })
  return ret
}

export function contentSpider(res) {
  let articleHtml = res.match(/<li id="note-[\S\s]+?<\/li>/g)
  let articleList = []
  articleHtml.map(item => {
    let title = item.match(
      /<a class="title" target="_blank" href="\S+">([\S\s]+?)<\/a>/
    )
    let description = item.match(/<p class="abstract">\s+([\S\s]+?)\s+<\/p>/)
    let author = item.match(
      /<a class="nickname" target="_blank" href="\S+">([\S\s]+?)<\/a>/
    )
    let like = item.match(
      /<i class="iconfont ic-list-like"><\/i>\s+(\d+)<\/span>/
    )
    let comment = item.match(
      /<i class="iconfont ic-list-comments"><\/i>\s+(\d+)\s+<\/a>/
    )
    let img = item.match(/<img data-echo="([\S\s]+?)"/)
    let article
    if (img) {
      article = new Article(
        title[1],
        description[1],
        author[1],
        like[1],
        comment[1],
        img[1]
      )
    } else {
      article = new Article(
        title[1],
        description[1],
        author[1],
        like[1],
        comment[1]
      )
    }
    articleList = [...articleList, article]
  })
  return articleList
}
