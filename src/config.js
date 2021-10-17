let config = {}

// 設定node的位置給變數, 3001 會連到整個nodejs的專案裡
export const API_HOST = 'http://localhost:3001'

export const ADDRESS_BOOK_LIST = API_HOST + '/address-book/api/list'

// 這裡設定傳送到nodejs裡面的upload-images.js檔案做處理上傳
export const UPLOAD_AVATAR = API_HOST + '/try-upload2'

// 為什麼img路徑前面不用+public?(是因為public本身就是根目錄?)
export const IMG_PATH = API_HOST + '/img'
export const TEST_AVATAR = API_HOST + '/test_avatar'

config = { API_HOST, ADDRESS_BOOK_LIST, UPLOAD_AVATAR, IMG_PATH, TEST_AVATAR }
export default config
