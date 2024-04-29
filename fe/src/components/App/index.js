import { ThemeProvider } from 'styled-components';

import { Container } from './styles';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/theme/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        Olá Mundo
      </Container>
    </ThemeProvider>
  );
}

export default App;
