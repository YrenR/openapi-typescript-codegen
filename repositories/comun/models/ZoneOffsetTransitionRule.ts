/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DayOfWeek } from './DayOfWeek';
import type { LocalTime } from './LocalTime';
import type { Month } from './Month';
import type { TimeDefinition } from './TimeDefinition';
import type { ZoneOffset } from './ZoneOffset';
export type ZoneOffsetTransitionRule = {
    month?: Month;
    dom?: string;
    dow?: DayOfWeek;
    time?: LocalTime;
    timeEndOfDay?: boolean;
    timeDefinition?: TimeDefinition;
    standardOffset?: ZoneOffset;
    offsetBefore?: ZoneOffset;
    offsetAfter?: ZoneOffset;
    dayOfMonthIndicator?: number;
    dayOfWeek?: DayOfWeek;
    localTime?: LocalTime;
    midnightEndOfDay?: boolean;
};

