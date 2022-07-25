import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>Welcome to Nx!</h1>
      <p>
        Welcome to Nx is an open source project and you can <a href="https:// github.com/nrwl/nx">
          <NxWelcome title="products" />
        </a>
      </p>
    </StyledApp>
  );
}

export default App;
