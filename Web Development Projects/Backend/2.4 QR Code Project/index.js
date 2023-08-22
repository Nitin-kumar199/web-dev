import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type Your URL ?",
      name: "URL",
    },
  ])
  .then((ans) => {
    // Use user feedback for... whatever!!
    const url = ans.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("url.png"));
    fs.writeFile("url.txt", url, () => {
      console.log("URL Saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
