import * as React from "react";
import { Theme, WithStyles } from "@material-ui/core";
import { NavigationAction, DateRange } from "../types";
declare const styles: (theme: Theme) => {
    root: {
        width: number;
    };
    weekDaysContainer: {
        marginTop: number;
        paddingLeft: number;
        paddingRight: number;
    };
    daysContainer: {
        paddingLeft: number;
        paddingRight: number;
        marginTop: number;
        marginBottom: number;
    };
};
interface MonthProps extends WithStyles<typeof styles> {
    value: Date;
    marker: symbol;
    dateRange: DateRange;
    minDate: Date;
    maxDate: Date;
    navState: [boolean, boolean];
    setValue: (date: Date) => void;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<MonthProps>, "marker" | "children" | "value" | "dateRange" | "minDate" | "maxDate" | "navState" | "setValue" | "helpers" | "handlers"> & import("@material-ui/core").StyledComponentProps<"root" | "weekDaysContainer" | "daysContainer">>;
export default _default;
