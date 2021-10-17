// import logo from './logo.svg';
import './App.css'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { ADDRESS_BOOK_LIST, UPLOAD_AVATAR } from './config'
import asiox from 'axios'

function App() {
  let [imgSrc, setImgsrc] = useState('')
  useEffect(() => {}, [])

  const doUpload = async () => {
    // 拿到整個表單
    const fd = new FormData(document.fake_form)
    const r = await fetch(UPLOAD_AVATAR, {
      method: 'POST',
      body: fd,
    })
    const j = await r.json()
    console.log(j)
  }

  return (
    <>
      <form name="fake_form" onSubmit={(e) => e.preventDefault()}>
        <img src="" alt="" width="300px" id="img01" />
        <input type="file" id="avatar" name="avatar" />

        <div className="mb-3">
          <label htmlFor="my_img" className="form-label">
            image
          </label>
          <input
            type="text"
            className="form-control"
            id="my_img"
            name="my_img"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={doUpload}>
          Submit
        </button>
      </form>
    </>
  )
}

export default App
