import { useEffect } from 'react';
import {Alert} from './components/Alert/Alert'
import {QueryClient, QueryClientProvider} from "react-query";
import styled from "styled-components";

const queryClient = new QueryClient()
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    background: #D6D7EF;
`;
const ContainerForSpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 118px;
  background: #9395D3;
`;
const Title = styled.div`
  width: 131px;
  height: 34.264px;
  flex-shrink: 0;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 25px;
`;

function App() {
    useEffect(() => {
        document.body.style.background = '#D6D7EF';
    }, []);
    return (
        <QueryClientProvider client={queryClient}>
            <Container>
                <ContainerForSpan>
                    <Title> TODO LIST</Title>
                </ContainerForSpan>
                <div>
                    <Alert />
                </div>
            </Container>
        </QueryClientProvider>
    );
}

export default App;
