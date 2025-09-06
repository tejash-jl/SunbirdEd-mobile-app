import { TelemetryObject, Rollup, CorrelationData, HierarchyInfo , Course} from '@project-fmps/sunbird-sdk';

export interface ContentInfo {
    telemetryObject: TelemetryObject;
    rollUp: Rollup;
    correlationList: CorrelationData[];
    hierachyInfo: HierarchyInfo[];
    course?: Course;
}
