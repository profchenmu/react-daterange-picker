import { WithStyles } from "@material-ui/core";
import React from "react";
interface HeaderProps extends WithStyles<typeof styles> {
    date: Date;
    setDate: (date: Date) => void;
    nextDisabled: boolean;
    prevDisabled: boolean;
    onClickNext: () => void;
    onClickPrevious: () => void;
}
declare const styles: {
    iconContainer: {
        padding: number;
    };
    icon: {
        padding: number;
        "&:hover": {
            background: string;
        };
    };
};
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<HeaderProps>, "date" | "setDate" | "nextDisabled" | "prevDisabled" | "onClickNext" | "onClickPrevious" | "children"> & import("@material-ui/core").StyledComponentProps<"iconContainer" | "icon">>;
export default _default;
