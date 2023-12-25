import {useEffect, useState} from 'react';
import {AlertAddTask} from './components/Alert/AlertAddTask'
import styled from "styled-components";
import {useTasks} from "./hooks/useTasks";
import {AlertDeleteTask} from './components/Alert/AlertDeleteTask'

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
const NameInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 23px;
  border-color: #9395D3;
  border-radius: 10px 10px 10px 10px;
`;
function App() {
    useEffect(() => {
        document.body.style.background = '#D6D7EF';
    }, []);
    const {data} = useTasks();
    const [searchValue, setSearchValue] = useState('')
    const onSearchInputChange = (event) => {
        setSearchValue(event.nativeEvent.target.value)
    }
   const filterTasks = (data,searchValue) => {
        if(!data){
            return [];
        }
        return data.filter((el) => {
            return el.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        });
    }
    /*const filteredTasks = filterTasks(data, searchValue);*/
    const renderTaskList = () => {

        if (data) {
            const renderItem = (task, index) => {
                return (


                    <ContainerWithTask key={task.id}>
                        <InputTask type={'checkbox'} defaultChecked={task.isDone}/>
                        <AlertDeleteTask taskID={task.id}/>
                        <TitleTask> {task.title}</TitleTask>
                    </ContainerWithTask>
                )

            }
            return /*filteredTasks.*/data.map(renderItem);
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
                    <NameInput value={searchValue} onChange={onSearchInputChange}/>
                    {renderTaskList()}
                </ContainerWithTasks>
            </Container>
    );
}

export default App;
