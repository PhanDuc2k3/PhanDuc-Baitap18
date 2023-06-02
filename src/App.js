import Login from "./Login";
import UserDetails from "./Details";

function App() {
  const userInfo = {
    userName: "PMD",
    email: "pmd@gmail.com",
    phone: "111111111",
  };
  return (
    <>
      <div className="Container" style={{ marginLeft: "600px" }}>
        <Login />
      </div>
      <hr></hr>
      <div className="Container" style={{ marginLeft: "600px" }}>
        <UserDetails info={userInfo} />
      </div>
    </>
  );
}

export default App;