import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'
import {useDeleteTasks, useUpdateTasks} from "../../hooks/useTasks";

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
const InputTask = styled.input`
  width: 25.5px;
  height: 25.5px;
  border-radius: 15px;
  margin-left: 20px;
`;

export const AlertUpdateTask = ({taskID,title}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {updateTask} = useUpdateTasks();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const onUpdateNameButtonClick = () => {
        console.log('id',taskID)
        //updateTask(taskID,title);
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
                        <TitleForButton> Is the task completed?</TitleForButton>
                    </ContainerForTitle>
                    <NameButton onClick={onUpdateNameButtonClick}>Yes</NameButton>
                    <NameButton onClick={closeAlert}>No</NameButton>
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <InputTask type={'checkbox'} onChange={showAlertButtonClick}/>
        </>
    )
}