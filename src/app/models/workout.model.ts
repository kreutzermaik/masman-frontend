import {Exercise} from "./exercise.model";

export interface Workout {
  name: string;
  category: string;
  exercises: Exercise;
}
