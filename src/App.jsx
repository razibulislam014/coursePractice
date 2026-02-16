import Profile from "./components/Profile";

function App() {
  const person = "Razibul";
  const size = 35;
  const age = 22;

  return (
    <div>
      <div>
        <Profile person={person} size={size} age={age} />
      </div>
    </div>
  );
}

export default App;
