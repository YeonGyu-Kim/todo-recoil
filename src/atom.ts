import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const categoryState = atom<Categories>({
  key: "toDoCategory",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDoState>({
  key: "toDo", // unique ID (with respect to other atoms/selectors)
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d"],
    done: ["e", "f"],
  },
});
