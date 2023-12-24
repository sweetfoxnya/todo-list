import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'
import {Input} from "../Input";
import {useAddNewTasks} from "../../hooks/useTasks";

const ButtonAdd = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  background: #9395D3;
  color: white;
  border-radius: 50px;
  align-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 25px;
  
`;

const ContainerForTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 70px;
  background: #9395D3;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 10px 10px;
`;
const TitleForButton = styled.div`
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
`;
const ContainerForForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const AlertAddTask = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addNewTask} = useAddNewTasks();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }
    const onAddNewTaskButtonClick = (title) => {
        addNewTask(title)

    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                <ContainerForForm>
                    <ContainerForTitle>
                        <TitleForButton> Add Task</TitleForButton>
                    </ContainerForTitle>
                    <Input
                        onCloseAddTask={closeAlert}
                        onAddNewTaskButtonClick={onAddNewTaskButtonClick}
                    />
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <ButtonAdd onClick={showAlertButtonClick}> + </ButtonAdd>
        </>
    )
}