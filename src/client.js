import * as contentful from "contentful";

export const client = contentful.createClient({
  space: 'xboxdo2c4vb8', 
  // process.env.REACT_APP_SPACE_ID,
  accessToken: 'pfc78Qz8o8aMdb9pSRdqpHBVgjtNRVMXQ-e-6CiRgYg'
  //process.env.REACT_APP_ACCESS_TOKEN,
});
