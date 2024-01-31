import styled from "styled-components";

const LoginButton = styled.button`
  background-color: red;
  color: white;
`;

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
`;

const MenuBar = () => {
  return (
    <StyledMenuBar>
      <span>ItEat</span>
      <span>스터디/프로젝트</span>
      <span>멘토링</span>
      <span>커뮤니티</span>
    </StyledMenuBar>
  );
};

function App() {
  return (
    <div>
      <MenuBar />
      <LoginButton>Login</LoginButton>
    </div>
  );
}

export default App;
