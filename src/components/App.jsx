import { Feedback } from "./feedback/Feedback";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101',
        padding: 50,
      }}
    >
      <Feedback/>
    </div>
  );
};
