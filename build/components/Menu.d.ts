import React from "react";
import { WithStyles } from "@material-ui/core";
import { DateRange, DefinedRange, Setter, NavigationAction } from "../types";
interface MenuProps extends WithStyles<any> {
    dateRange: DateRange;
    ranges: DefinedRange[];
    minDate: Date;
    maxDate: Date;
    firstMonth: Date;
    secondMonth: Date;
    setFirstMonth: Setter<Date>;
    setSecondMonth: Setter<Date>;
    setDateRange: Setter<DateRange>;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<MenuProps>, "children" | "dateRange" | "minDate" | "maxDate" | "helpers" | "handlers" | "ranges" | "firstMonth" | "secondMonth" | "setFirstMonth" | "setSecondMonth" | "setDateRange"> & import("@material-ui/core").StyledComponentProps<string>>;
export default _default;
