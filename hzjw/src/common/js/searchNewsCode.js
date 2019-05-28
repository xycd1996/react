import * as codes from './newsCode'

export function searchCode(searchCode) {
  let result = 0
  switch (searchCode) {
    case codes.PoliceDynamicCode:
      result = 1
      break;
    case codes.SafetyPrecautionCode:
      result = 1
      break;
    case codes.WantedSurveyCode:
      result = 1
      break;
    case codes.LostAndFound:
      result = 2
      break;
    case codes.SearchNotices:
      result = 3
      break;
    default:
      break;
  }
  return result
}