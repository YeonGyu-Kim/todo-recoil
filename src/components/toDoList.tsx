import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { toDoState } from "../atom";
import DragabbleCard from "./dragabbleCard";
import Board from "./board";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    /*  setToDos((currentToDos) => {
      const getCurrentToDos = [...currentToDos];
      getCurrentToDos.splice(source.index, 1);
      getCurrentToDos.splice(destination?.index, 0, draggableId);
      return getCurrentToDos;
    }); */
  };

  return (
    <section>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </section>
  );
};

export default ToDoList;
