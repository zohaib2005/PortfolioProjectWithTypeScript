import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log("Clicked")}>
      Fyacx
    </ChildAsFC>
  );
};

export default Parent;
