import generateStupidName from 'sillyname';
import {randomSuperhero} from 'superheroes';
import inquirer from 'inquirer';
import sillyName from 'sillyname';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([{
    message: 'What is your name?',
    name: "act2"
  }])
  .then((answers) => {
    var ss = generateStupidName();
    var sh = randomSuperhero();
    var qr_png = qr.image(answers.act2, {type: 'png'});
    var qr_png1 = qr.image(sh, {type: 'png'});
    var qr_png2 = qr.image(ss, {type: 'png'});

    const content = `${answers.act2} ${ss} ${sh}`;

    console.log("Hello", answers.act2);
    console.log("Your villain name will be", sh) ;
    console.log("And your superhero name will be", ss);

    qr_png.pipe(fs.createWriteStream("name.png"));
    qr_png1.pipe(fs.createWriteStream("superheroname.png"));
    qr_png2.pipe(fs.createWriteStream("sillyname.png"));

    fs.writeFile('myhero.txt', content, (err) => {
      if (err) {
          console.error('Error writing file:', err);
      } else {
          console.log('File has been written successfully');
      }
  });
  })
  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
     
    }
  });
