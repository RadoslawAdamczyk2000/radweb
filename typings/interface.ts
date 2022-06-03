import { ReactElement } from "react";
import { IntNavigation } from "../components/Layout/Navigation/Navigation/interface";
export interface IntLayout extends IntNavigation {
    children:ReactElement;
}