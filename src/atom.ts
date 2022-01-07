import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const minuteSelector = selector<number>({
  key: "minuteSelcetor",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});

export const categoryState = atom<Categories>({
  key: "toDoCategory",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
