const fs = require('fs')
const path = require('path')

const saveToFileSystem = (fileRaw, output) => {
  try {
    const fileName = path.join(output, 'produtos.csv')
    if ( fs.existsSync( fileName ) ) {
      fs.unlinkSync( fileName )
    }
    fs.writeFileSync(fileName, fileRaw)
    return fileName
  } catch ( err ) {
    throw err
  }
}

module.exports = {
  saveToFileSystem
}
