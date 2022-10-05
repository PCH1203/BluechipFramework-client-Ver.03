/**
 * axios Error handling
 * @param {*} err = error code
 * @returns false return
 */
export const AxiosCatch = (err) => {
  console.log(err)
  if (err.response.status === 504) {
    alert('서버와 연결이 끊어졌습니다.')
  }
  return false
}
