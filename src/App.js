import styled from "styled-components";

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  a {
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    color: #5649ea;
    text-decoration: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const MenuBar = styled.div`
  display: flex;
  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  input {
    background-color: #f5f5f5;
    color: #cbcbcb;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 50px;
    padding: 8px;
    outline: none;
    width: 260px;
    padding-left: 10px;
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const NewId = styled.div`
  display: flex;
  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #5649ea;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
  }
`;

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #978eff;
  width: 500px;
  height: 550px;
  margin: auto;
  border-radius: 20px;
`;

const SignUpTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 100px;
`;

const SignUpId = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  h3 {
    color: white;
  }
  input {
    color: #808080;    
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 10px;
    outline: none;
  }
`;

const SignUpPw = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  h3 {
    color: white;
  }
  input {
    color: #808080;    
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 10px;
    outline: none;
  }
`;

const SignUpMM = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  h3 {
    color: white;
  }
  label {
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    width: 300px;
  }
`;

const SignUpBtn = styled.button` 
  margin-top : 20px;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
  height: 50px;
  width: 300px;
  border: none;
  border-radius: 10px;
  outline: none;
`;

const SignUpKakao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;  
  font-weight: bold;
  border-radius: 10px;
  margin-top: 20px;
  width: 300px;
  height: 30px;
  img {
    margin-right: 5px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

function App() {
  return (
    <div>
      <StyledMenuBar>
        <Logo>
          <a href="#">ItEat</a>
        </Logo>
        <MenuBar>
          <a href="#">스터디/프로젝트</a>
          <a href="#">멘토링</a>
          <a href="#">커뮤니티</a>
        </MenuBar>
        <SearchBar>
          <img src="./Search.png" alt="Search icon" />
          <input
            type="text"
            placeholder="스터디나 프로젝트를 검색해보세요."
          ></input>
        </SearchBar>
        <NewId>
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
        </NewId>
      </StyledMenuBar>
      <StyledSignUp>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpId>
          <h3>아이디</h3>
          <input type="text" placeholder="이메일을 입력해주세요."></input>
        </SignUpId>
        <SignUpPw>
          <h3>비밀번호</h3>
          <input
            type="text"
            placeholder="영문+숫자 조합 8자 이상 입력."
          ></input>
        </SignUpPw>
        <SignUpMM>
          <h3>멘토 / 멘티</h3>
          <label>
            <input type="radio" name="role" value="mentor" />
            멘토
            <input type="radio" name="role" value="mentee" />
            멘티
          </label>
        </SignUpMM>
        <SignUpBtn>회원가입</SignUpBtn>
        <SignUpKakao><img src="./Kakao.png" alt="KAkao icon" />카카오톡으로 회원가입하기</SignUpKakao>
      </StyledSignUp>
    </div>
  );
}

export default App;
