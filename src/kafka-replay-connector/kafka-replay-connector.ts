import axios from 'axios';
import { merge, get } from 'lodash';

const kafkaReplayConnector = async (url: string, opt: object) => {
  const payload: { method: string; 'content-type': string } = {
    method: 'GET',
    'content-type': 'application/json'
  }
  let data: object;
  const formData = get(opt, 'data');

  try {
    ({ data } = await axios({
      url,
      ...merge(payload, opt),
      ...((formData && !(formData instanceof FormData) && {
        data: JSON.parse(formData)
      }))
    }))
  } catch(err: unknown) {
    console.log(err);
  }
  return data;
}

export default kafkaReplayConnector;