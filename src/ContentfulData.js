<<<<<<< HEAD
import { Box, Typography, Paper, Button } from '@mui/material';
=======
import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "./client";
import Posts from "./components/Posts";
>>>>>>> master

export default class ContentfulDataComp extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Box m={2}>
<<<<<<< HEAD
        <Paper>
        <div style={{padding: 10}}>
        <Typography>
            Contentful Data Here!
        </Typography>
        <Button variant="outlined">Outlined</Button>
        </div>
        </Paper>
        
=======
          <Paper>
            <Typography>
              <div className="wrapper">
                <Posts posts={this.state.articles} />
              </div>
            </Typography>
          </Paper>
>>>>>>> master
        </Box>
      </>
    );
  }
}
