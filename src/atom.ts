import { atom } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const categoryState = atom<Categories>({
  key: "toDoCategory",
  default: Categories.TO_DO,
});

export const toDoState = atom({
  key: "toDo", // unique ID (with respect to other atoms/selectors)
  default: ["a", "b", "c", "d", "e", "f"], // default value (aka initial value)
});
