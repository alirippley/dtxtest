import axios from 'axios'


export function test() {
  return axios.request({
    method: 'post',
    url: 'http://node-express-env.w3dt9tmpjw.us-east-2.elasticbeanstalk.com/',
    data: {
      email: 'test',
      name: 'Flintstone',
      previewAccess: 'Yes',
      theme: 'notflatly'
    }
  }).then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}