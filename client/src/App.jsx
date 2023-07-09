import FileDownload from 'js-file-download'

function App() {

  const download = async (e) => {
    e.preventDefault()
    // const response = await fetch('http://localhost:4000/download', {
    //   method: 'GET'
    // })

    const response = await fetch('http://localhost:4000/download/filename?name=shadowboard&ext=jpg', {
      method: 'GET'
    })

    const blob = await response.blob()

    FileDownload(blob, 'shadowboard.jpg')
  }

  return (
    <>
      <button className="" onClick={download}></button>
    </>
  )
}

export default App
