const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.listen(4000, () => {
  console.log(`application started on port 4000`)
})


/**
 * I guess the way it is supposed to work is the server is sent a GET request from the request it will have the name of the file or a unique identifier like the file 'ID' it wants to download, occassionally the file may be stored in a storage container like s3 bucket, so the location url of the storage location will be in the database, my server will now make another request to the storage server to send the file, I can now process it from my server and send it to the user.
 */

app.get('/download', async (req, res) => {
  try {
    res.download('./sample.pdf')
  } catch (err) {
    console.log(err)
  }
})


/**
 * this is a query
 * /download?filename=sample&ext=pdf
 */

app.get('/download/:filename', async (req, res) => {
  try {
    const query = req.query
    const params = req.params
    console.log({ query }, { params })

    res.download(`./${query.name}.${query.ext}`)
  } catch (err) {
    // some code
  }
})

