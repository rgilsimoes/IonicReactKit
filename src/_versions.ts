export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.0.3',
    name: 'ionic-react-kit',
    versionDate: '2025-06-10T11:09:38.662Z',
    description: 'An Ionic React Starter Kit bundled with care.',
    gitCommitHash: 'c173896',
    versionLong: '0.0.3-c173896',
};
export default versions;
