import { ThemeProvider } from 'styled-components';

import { Container } from './styles';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/theme/default';

import Header from '../Header';
import ContactsList from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
