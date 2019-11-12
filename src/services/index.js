  import axios from 'axios'


// Send a POST request
export const test = () => axios({
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