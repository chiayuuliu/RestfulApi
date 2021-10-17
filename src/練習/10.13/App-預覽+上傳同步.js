// import logo from './logo.svg';
import './App.css'
import { useState } from 'react'
import { UPLOAD_AVATAR, IMG_PATH } from './config'
import axios from 'axios'

function App() {
  let [imgSrc, setImgSrc] = useState('')
  let [myName, setMyName] = useState('')
  console.log('又變了')

  const doUpload = async () => {
    const fd = new FormData(document.form1)
    // axios 格式: axios.post(url, body)
    const r = await axios.post(UPLOAD_AVATAR, fd)

    console.log(r.data)
    setImgSrc(IMG_PATH + '/' + r.data.filename)
  }

  return (
    <>
      <form name="fake_form" onSubmit={(e) => e.preventDefault()}>
        <img src={imgSrc} alt="" width="300px" id="img01" />
        <button
          type="button"
          className="btn btn-success"
          // 等元件didmount之後再呼叫事件處理器(觸發隱藏的按鈕)
          onClick={(e) => document.querySelector('#avatar').click()}
        >
          上傳大頭貼
        </button>
        <div className="mb-3">
          <label htmlFor="my_img" className="form-label">
            image
          </label>
          <input
            type="text"
            className="form-control"
            id="my_img"
            name="my_img"
            value={imgSrc}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="my_name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="my_name"
            name="my_name"
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
}

export default App
