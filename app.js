const axios = require('axios');
const fs = require('fs');
const path = require('path');

const googleUrl = 'https://script.google.com/macros/s/AKfycbyFRu0xZkYKd5NhLp5dQI1fFxtmt42kpuBc9nl1ftDI0a2gjSeX/exec';
const url = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=tR9TIFWlvquB';

function getData() {
  axios.get(`${googleUrl}?url=${url}`)
    .then((response) => {
      const data = JSON.stringify(response.data);

      fs.writeFile(path.join(__dirname, 'data.json'), data, (err) => {
        if (err) {
          response.send(err);
        } else {
          response.send('更新完成');
        }
      });
    })
    .catch((error) => {
      response.send(error);
    })
}

getData();