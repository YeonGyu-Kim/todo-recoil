import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.color.cardColor};
  margin-bottom: 1rem;
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const DragabbleCard = memo(({ toDo, index }: IDragabbleCardProps) => {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
});

export default DragabbleCard;
