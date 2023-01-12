import { ConstType } from '../utils';

/**地圖資訊 */
export type FightMap = {
    /**地圖所屬地區 */
    mapRegion: string;
    /**地圖名稱 */
    mapName: string;
    /**最早以日替圖出現在哪次合約 */
    startCC: number;
    /**最後以日替圖出現在哪次合約 */
    endCC?: number;
    /**於哪次合約擔任常駐圖 */
    mainMapCC?: number;
};

/**地圖key name */
export type FightMapKey = keyof typeof FightMapList;

/**地圖資訊列表 */
export const FightMapList = ConstType<{ [key: string]: FightMap }>()({
    M1: {
        mapRegion: '龍門外環',
        mapName: '荒蕪廣場',
        startCC: -1,
        endCC: 0,
    },
    M2: {
        mapRegion: '龍門外環',
        mapName: '無人危樓',
        startCC: -1,
        endCC: 0,
    },
    M3: {
        mapRegion: '切爾諾伯格',
        mapName: '59區廢墟',
        mainMapCC: -1,
        startCC: 0,
        endCC: 1,
    },
    M4: {
        mapRegion: '未知沙漠',
        mapName: '荒漠',
        startCC: 0,
        endCC: 2,
    },
    M5: {
        mapRegion: '龍門',
        mapName: '新街',
        startCC: 0,
        endCC: 2,
    },
    M6: {
        mapRegion: '龍門',
        mapName: '中轉站',
        startCC: 0,
        endCC: 4,
    },
    M7: {
        mapRegion: '龍門外環',
        mapName: '霜凍廢墟',
        startCC: 0,
        endCC: 3,
    },
    M8: {
        mapRegion: '切爾諾伯格',
        mapName: '破碎大道',
        mainMapCC: 0,
        startCC: 1,
        endCC: 3,
    },
    M9: {
        mapRegion: '荒野',
        mapName: '黃鐵峽谷',
        mainMapCC: 1,
        startCC: 2,
        endCC: 5,
    },
    M10: {
        mapRegion: '龍門',
        mapName: '軍械庫東',
        startCC: 1,
        endCC: 5,
    },
    M11: {
        mapRegion: '切爾諾伯格',
        mapName: '荒廢工廠',
        mainMapCC: 2,
        startCC: 3,
        endCC: 6,
    },
    M12: {
        mapRegion: '切爾諾伯格',
        mapName: '6區廢墟',
        startCC: 3,
        endCC: 6,
    },
    M13: {
        mapRegion: '荒野',
        mapName: '風蝕高地',
        mainMapCC: 3,
        startCC: 4,
        endCC: 7,
    },
    M14: {
        mapRegion: '哥倫比亞',
        mapName: '閉鎖監獄',
        startCC: 4,
        endCC: 7,
    },
    M15: {
        mapRegion: '荒野',
        mapName: '無序礦區',
        mainMapCC: 4,
        startCC: 5,
        endCC: 8,
    },
    M16: {
        mapRegion: '卡西米爾',
        mapName: '八號競技場',
        mainMapCC: 5,
        startCC: 6,
        endCC: 8,
    },
    M17: {
        mapRegion: '切爾諾伯格',
        mapName: '遺棄地塊',
        startCC: 6,
        endCC: 9,
    },
    M18: {
        mapRegion: '荒野',
        mapName: '狂嚎沙原',
        mainMapCC: 6,
        startCC: 7,
    },
    M19: {
        mapRegion: '荒野',
        mapName: '熾熱溶洞',
        startCC: 7,
    },
    M20: {
        mapRegion: '炎國',
        mapName: '灰齊山麓',
        mainMapCC: 7,
        startCC: 8,
    },
    M21: {
        mapRegion: '薩爾貢',
        mapName: '沙海遺跡',
        startCC: 8,
    },
    M22: {
        mapRegion: '卡西米爾',
        mapName: '大騎士領酒吧街',
        mainMapCC: 8,
        startCC: 9,
    },
    M23: {
        mapRegion: '炎國',
        mapName: '尚蜀山道',
        startCC: 9,
    },
    M24: {
        mapRegion: '伊比利亞',
        mapName: '鹽風溶洞',
        mainMapCC: 9,
        startCC: 10,
    },
} as const);
