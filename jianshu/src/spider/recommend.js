export function bannerSpider(res) {
  let bannerHtml = res.match(/desktop"><img src="[\S\s]+?" alt="540" \/>/g)
  let ret = []
  bannerHtml.forEach(item => {
    ret = [...ret, item.match(/\/\/([\S\s])+?\/540/g)]
  })
  return ret
}
