import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';
import Reviews from './components/Reviews/Reviews';
import reviews from './data';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box as='main'>
        <Reviews reviews={reviews} />
      </Box>
    </>
  );
}

export { App };
