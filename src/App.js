import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Column from './components/Grid/Column';
import Ciao from './components/CiaoSection/Ciao';
import FlexContainer from './components/FlexContainer';

function App() {
    return <>
      <Calendar />
      <Container>
        <Row>
          <Column colNum='6'><Ciao id={2} name='Elon' /></Column>
          <Column colNum='6'><Ciao id={3} name='Elen' /></Column>
        </Row>
      </Container>
      <FlexContainer jc='space-between' ai='center' fd='column' fw='wrap' title='@@@' style={{border:'1px solid blue'}}>
        <Ciao id={2} name='Ivan' />
        <Ciao id={3} name='Nazar' />
        <Ciao id={4} name='Ann' />
      </FlexContainer>
    </>
}

  export default App;