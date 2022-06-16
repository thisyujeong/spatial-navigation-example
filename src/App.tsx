import styled from 'styled-components';
import './App.css';
import Gallery from './components/Gallery';
import SideNav from './components/SideNav';

import { init } from '@noriginmedia/norigin-spatial-navigation';

init({
  debug: true,
  // visualDebug: true,
});

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
function App() {
  return (
    <div className="App">
      <Container>
        <SideNav />
        <Gallery />
      </Container>
    </div>
  );
}

export default App;
