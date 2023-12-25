import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'
import {useDeleteTasks} from "../../hooks/useTasks";

const ButtonAdd = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background: #9395D3;
  color: white;
  border-radius: 5px;
  align-content: center;
  align-items: center;
  font-size: 18px;
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
const NameButton = styled.button`
  
  border-radius: 10px 10px 10px 10px;
  background: #9395D3;
  width: 360px;
  height: 35px;
  flex-shrink: 0;
  color: #FFF;
  
`;

export const AlertDeleteTask = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {deleteTask} = useDeleteTasks();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const onDeleteNameButtonClick = () => {
        //deleteTask(id);
        closeAlert();
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                <ContainerForForm>
                    <ContainerForTitle>
                        <TitleForButton> Delete the task?</TitleForButton>
                    </ContainerForTitle>
                    <NameButton onClick={onDeleteNameButtonClick}>Yes</NameButton>
                    <NameButton onClick={closeAlert}>No</NameButton>
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <ButtonAdd onClick={showAlertButtonClick}> x </ButtonAdd>
        </>
    )
}