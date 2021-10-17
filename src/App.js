// import logo from './logo.svg';
import './App.css'
import { useState, useEffect } from 'react'
import conf, { IMG_PATH, UPLOAD_AVATAR, TEST_AVATAR } from './config'
import axios from 'axios'

function App() {
  let [imgSrc, setImgSrc] = useState('')
  let [myName, setMyName] = useState('')
  console.log({ conf })

  useEffect(() => {
    ;(async () => {
      // 送到nodejs處理, 拿資料庫的資料
      // 設定寫死拿sid 6
      const r = await fetch(TEST_AVATAR + '/6')
      // 拿到資料庫撈出來的
      const obj = await r.json()
      setMyName(obj.name)
      setImgSrc(obj.avatar)
      console.log(obj)
    })()
  }, [])

  const doUpload = async () => {
    const fd = new FormData(document.form1)
    const r = await axios.post(UPLOAD_AVATAR, fd)

    console.log(r.data)

    setImgSrc(r.data.filename)
  }

  const mySubmit = async (e) => {
    e.preventDefault()

    // urlencoded, json, formData

    // json
    /* 
    const dataObj = {
      avatar: document.fake_form.avatar.value,
      name: document.fake_form.name.value,
    }
    const r = await fetch(TEST_AVATAR, {
      method: 'POST',
      // 把表單資料抓出來後轉換成JSON
      body: JSON.stringify(dataObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await r.json()
    console.log(data)
    */

    // urlencoded, 用這個方式就不用一個個去處理抓資料欄位

    // const usp = new URLSearchParams(new FormData(document.fake_form))
    // const r = await fetch(TEST_AVATAR, {
    //   method: 'POST',
    //   body: usp.toString(),
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // })
    // const data = await r.json()
    // console.log(data)
    // -------------------------------------------------------------------
    // formData 沒有要上傳後端要使用upload.none()的 multer 功能
    // 設定是formData,會自動設定Content-Type

    // const r = await fetch(TEST_AVATAR, {
    //   method: 'POST',
    //   body: new FormData(document.fake_form),
    // })
    // const data = await r.json()
    // console.log(data)

    // ************修改***************
    const r = await fetch(TEST_AVATAR + '/6', {
      method: 'PUT',
      body: new FormData(document.fake_form),
    })
    const data = await r.json()
    console.log(data)
  }

  // 設定loading 畫面
  const loading = (
    <>
      <p>Loading畫面(也可以放gif圖)</p>
    </>
  )
  const mainView = (
    <>
      <form name="fake_form" onSubmit={mySubmit}>
        <img
          // 路徑+檔名就可以顯示到圖片
          src={
            // 設定預設圖片
            imgSrc ? IMG_PATH + '/' + imgSrc : IMG_PATH + '/default-avatar.jpg'
          }
          alt=""
          width="300px"
          id="img01"
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={(e) => document.querySelector('#avatar').click()}
        >
          上傳大頭貼
        </button>
        <input
          type="hidden"
          className="form-control"
          name="avatar"
          value={imgSrc}
        />
        <div className="mb-3">
          <label htmlFor="my_name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={myName}
            onChange={(e) => {
              setMyName(e.target.value)
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <form name="form1" style={{ display: 'none' }}>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={doUpload}
        />
      </form>
    </>
  )
  return <>{imgSrc ? mainView : loading}</>
}

export default App
