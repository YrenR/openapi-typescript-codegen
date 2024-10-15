/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocalDateTime } from './LocalDateTime';
import type { ZoneOffset } from './ZoneOffset';
import type { ZoneOffsetTransition } from './ZoneOffsetTransition';
import type { ZoneOffsetTransitionRule } from './ZoneOffsetTransitionRule';
export type ZoneRules = {
    standardTransitions?: Array<number>;
    standardOffsets?: Array<ZoneOffset>;
    savingsInstantTransitions?: Array<number>;
    savingsLocalTransitions?: Array<LocalDateTime>;
    wallOffsets?: Array<ZoneOffset>;
    lastRules?: Array<ZoneOffsetTransitionRule>;
    fixedOffset?: boolean;
    transitions?: Array<ZoneOffsetTransition>;
    transitionRules?: Array<ZoneOffsetTransitionRule>;
};

