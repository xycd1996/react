// 身份证正则校验
export function validateIdCard(idCard) {
  const str = idCard.replace(/\s*/g, "")
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  return reg.test(str)
}

// 手机号正则校验
// 最新校验规则：https://github.com/VincentSit/ChinaMobilePhoneNumberRegex
export function validatePhone(phone) {
  const str = phone.replace(/\s*/g, "")
  const reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4[579]\d{2})\d{6}$/
  return reg.test(str)
}