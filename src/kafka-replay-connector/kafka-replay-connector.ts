import axios from 'axios';

const kafkaReplayConnector = async (url: string, method: string, opt: object) => {
  let data: object;

  try {
    ({ data } = await axios({
      url,
      method,
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(opt)
    }))
  } catch(err) {
    console.log(err);
    throw err;
  }

  return data;
}

export default kafkaReplayConnector;