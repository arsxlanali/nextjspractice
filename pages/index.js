// import "./App.css";

import HeroList from "../components/hero-insert";
import HeroInsert from "../components/hero-list";
export default function Home() {
  return (
    <div>
      <h1>RxDB Example - React</h1>
      <HeroList />
      <HeroInsert />
    </div>
  );
}
