import * as React from "react";
import { Theme, WithStyles } from "@material-ui/core";
interface DayProps extends WithStyles<typeof styles> {
    filled?: boolean;
    outlined?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    startOfRange?: boolean;
    endOfRange?: boolean;
    onClick?: () => void;
    onHover?: () => void;
    value: number | string;
}
declare const styles: (theme: Theme) => {
    leftBorderRadius: {
        borderRadius: string;
    };
    rightBorderRadius: {
        borderRadius: string;
    };
    buttonContainer: {
        display: string;
    };
    button: {
        height: number;
        width: number;
        padding: number;
    };
    buttonText: {
        lineHeight: number;
    };
    outlined: {
        border: string;
    };
    filled: {
        "&:hover": {
            backgroundColor: string;
        };
        backgroundColor: string;
    };
    highlighted: {
        backgroundColor: string;
    };
    contrast: {
        color: string;
    };
};
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<DayProps>, "filled" | "disabled" | "children" | "onClick" | "value" | "outlined" | "highlighted" | "startOfRange" | "endOfRange" | "onHover"> & import("@material-ui/core").StyledComponentProps<"filled" | "button" | "outlined" | "leftBorderRadius" | "rightBorderRadius" | "buttonContainer" | "buttonText" | "highlighted" | "contrast">>;
export default _default;
