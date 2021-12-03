import * as contentful from "contentful";

export const client = contentful.createClient({
  space:  process.env.REACT_APP_SPACE_ID,
  //'xboxdo2c4vb8', 
  // process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  //'pfc78Qz8o8aMdb9pSRdqpHBVgjtNRVMXQ-e-6CiRgYg'
  //process.env.REACT_APP_ACCESS_TOKEN,
});
