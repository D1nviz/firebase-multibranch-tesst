import GameBoard from "./components/GameBoard";
import UsersList from "./components/UsersList";
import WelcomeDialog from "./components/dialogs/WelcomeDialog";

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center text-white">
        <UsersList />
        <WelcomeDialog />
        <GameBoard />
      </div>
    </>
  );
}
