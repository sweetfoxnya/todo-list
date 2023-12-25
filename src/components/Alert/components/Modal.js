import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #0000007d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 20px 30px;
  background: #D6D7EF;
  border-radius: 10px;
  position: relative;
`;
export const Modal = (props) => {

    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }

    return (
        <Backdrop>
            <Content onClick={contentComponentClickHandle}>
                {props.children}
            </Content>
        </Backdrop>
    )
}