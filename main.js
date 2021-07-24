const jp = require("jimp");

oldfile = "yourfilename.jpeg"
newfile = "yourfilename.png"

jp.read(oldfile, function(err, image) { // you can change the extensions if needed 

    if (err) {
        console.log(err)
    } else {
        image.write(newfile)
        console.log(`-----------------------------------`)
        console.log(oldfile, 'is converted to', newfile)
        console.log(`-----------------------------------`)
    }
})
