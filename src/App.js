import {useEffect, useState} from 'react';
import {AlertAddTask} from './components/Alert/AlertAddTask'
import styled from "styled-components";
import {useTasks} from "./hooks/useTasks";

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
const ContainerWithTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 25px;

`;
const ContainerWithTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 440px;
  height: 82px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TitleTask = styled.div`
  color: #9395D3;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const InputTask = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 15px;
  margin-left: 20px;
`;
function App() {
    useEffect(() => {
        document.body.style.background = '#D6D7EF';
    }, []);
    const {data} = useTasks();
    const renderTaskList = () => {
        if (data) {
            const renderItem = (task, index) => {
                return (
                    <ContainerWithTask>
                        <InputTask type={'checkbox'} defaultChecked={task.isDone}/>
                        <TitleTask> {task.title}</TitleTask>
                    </ContainerWithTask>
                )

            }
            return data.map(renderItem);
        }

    }
    return (
            <Container>
                <ContainerForSpan>
                    <Title> TODO LIST</Title>
                </ContainerForSpan>
                <div>
                    <AlertAddTask />
                </div>
                <ContainerWithTasks>
                    {renderTaskList()}
                </ContainerWithTasks>
            </Container>
    );
}

export default App;
