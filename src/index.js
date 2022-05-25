const PORT = 8000;
// const axios = require('axios').default;
// const cheerio = require('cheerio');
// const express = require('express');
// const app = express();
// const cors = require('cors')

// app.use(express());
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

// const url = 'https://www.theguardian.com/uk';

// app.get('/', function (req, res) {
//   res.json('This is my webscraper')
// })

// app.get('/results', (req, res) => {
// axios(url)
//   .then(response => {
//     const html = response.data
//     const payload = cheerio.load(html)
//     const articles = []
//     $('.fc-item__title', html).each(function () {
//       const title = $(this).text()
//       const url = $(this).find('a').attr('href')
//       articles.push({
//         title,
//         url
//       })
//       console.log(articles)
//     });
//     res.json(articles);
//   }).catch(err => console.log(err));
// });

// app.listen(PORT, () => console.log(`erver running on PORT ${PORT}`));
