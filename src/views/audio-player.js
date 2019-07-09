import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TrackList from '../components/track-list';

const AudioPlayer = () => {
  return (
    <Container>
      <Box my={2}>
        <TrackList />
      </Box>
    </Container>
  );
}

export default AudioPlayer;
