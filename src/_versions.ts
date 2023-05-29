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
    version: '0.0.2',
    name: 'ionic-react-kit',
    versionDate: '2024-01-08T12:08:28.009Z',
    description: 'An Ionic React Starter Kit bundled with care.',
    gitCommitHash: 'ged52963',
    gitCommitDate: '2024-01-08T12:08:27.000Z',
    versionLong: '0.0.2-ged52963',
    gitTag: 'v0.0.2',
};
export default versions;
