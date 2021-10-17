import { Profession } from "./user.types";
import { Category, City } from "./marketplace";

export interface Action {
    type: string,
    payload: any
};


export interface stateCommons {
    loading: boolean;
    error: string;
    categories: [Category];
    cities: [City];
    professions: [Profession];
}