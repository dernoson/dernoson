import { Info } from './common';

/**先鋒模板 key name */
export const VanguardModuleKey = ['pioneer', 'charger', 'bearer', 'tactician', 'agent'] as const;
/**狙擊模板 key name */
export const SniperModuleKey = ['marksman', 'artilleryman', 'heavyshooter', 'deadeye', 'besieger', 'flinger', 'spreadshooter'] as const;
/**醫療模板 key name */
export const MedicModuleKey = ['medic', 'multitarget', 'therapist', 'wandering', 'incantation'] as const;
/**術師模板 key name */
export const CasterModuleKey = ['core', 'splash', 'mystic', 'mechaccord', 'chain', 'blast', 'phalanx'] as const;
/**近衛模板 key name */
export const GuardModuleKey = [
    'dreadnought',
    'centurion',
    'lord',
    'artsfighter',
    'fighter',
    'swordmaster',
    'musha',
    'instructor',
    'liberator',
    'reaper',
] as const;
/**重裝模板 key name */
export const DefenderModuleKey = ['protector', 'guardian', 'juggernaut', 'artsprotector', 'duelist', 'fortress'] as const;
/**輔助模板 key name */
export const SupporterModuleKey = ['decelbinder', 'bard', 'abjurer', 'hexer', 'summoner', 'artificer'] as const;
/**特種模板 key name */
export const SpecialistModuleKey = [
    'pushstroker',
    'hookmaster',
    'executor',
    'merchant',
    'dollkeeper',
    'ambusher',
    'trapmaster',
    'geek',
] as const;

/**幹員職業模板 */
export type RoleModuleKey =
    | typeof VanguardModuleKey[number]
    | typeof SniperModuleKey[number]
    | typeof MedicModuleKey[number]
    | typeof CasterModuleKey[number]
    | typeof GuardModuleKey[number]
    | typeof DefenderModuleKey[number]
    | typeof SupporterModuleKey[number]
    | typeof SpecialistModuleKey[number];

/**先鋒模板資訊列表 */
const VanguardModuleInfo: { [key in typeof VanguardModuleKey[number]]: Readonly<Info> } = Object.freeze({
    pioneer: { index: 1, word_tw: '尖兵' },
    charger: { index: 2, word_tw: '衝鋒手' },
    bearer: { index: 3, word_tw: '執旗手' },
    tactician: { index: 4, word_tw: '戰術家' },
    agent: { index: 5, word_tw: '情報員' },
});

/**狙擊模板資訊列表 */
const SniperModuleInfo: { [key in typeof SniperModuleKey[number]]: Readonly<Info> } = Object.freeze({
    marksman: { index: 6, word_tw: '速射手' },
    artilleryman: { index: 7, word_tw: '炮手' },
    heavyshooter: { index: 8, word_tw: '重射手' },
    deadeye: { index: 9, word_tw: '神射手' },
    besieger: { index: 10, word_tw: '攻城手' },
    flinger: { index: 11, word_tw: '投擲手' },
    spreadshooter: { index: 12, word_tw: '散射手' },
});

/**醫療模板資訊列表 */
const MedicModuleInfo: { [key in typeof MedicModuleKey[number]]: Readonly<Info> } = Object.freeze({
    medic: { index: 13, word_tw: '醫師' },
    multitarget: { index: 14, word_tw: '群癒師' },
    therapist: { index: 15, word_tw: '療養師' },
    wandering: { index: 16, word_tw: '行醫' },
    incantation: { index: 17, word_tw: '咒癒師' },
});

/**術師模板資訊列表 */
const CasterModuleInfo: { [key in typeof CasterModuleKey[number]]: Readonly<Info> } = Object.freeze({
    core: { index: 18, word_tw: '中堅術師' },
    splash: { index: 19, word_tw: '擴散術師' },
    mystic: { index: 20, word_tw: '秘術師' },
    mechaccord: { index: 21, word_tw: '馭械術師' },
    chain: { index: 22, word_tw: '鏈術師' },
    blast: { index: 23, word_tw: '轟擊術師' },
    phalanx: { index: 24, word_tw: '陣法術師' },
});

/**近衛模板資訊列表 */
const GuardModuleInfo: { [key in typeof GuardModuleKey[number]]: Readonly<Info> } = Object.freeze({
    dreadnought: { index: 25, word_tw: '無畏者' },
    centurion: { index: 26, word_tw: '強攻手' },
    lord: { index: 27, word_tw: '領主' },
    artsfighter: { index: 28, word_tw: '術戰者' },
    fighter: { index: 29, word_tw: '鬥士' },
    swordmaster: { index: 30, word_tw: '劍豪' },
    musha: { index: 31, word_tw: '武者' },
    instructor: { index: 32, word_tw: '教官' },
    liberator: { index: 33, word_tw: '解放者' },
    reaper: { index: 34, word_tw: '收割者' },
});

/**重裝模板資訊列表 */
const DefenderModuleInfo: { [key in typeof DefenderModuleKey[number]]: Readonly<Info> } = Object.freeze({
    protector: { index: 35, word_tw: '鐵衛' },
    guardian: { index: 36, word_tw: '守護者' },
    juggernaut: { index: 37, word_tw: '不屈者' },
    artsprotector: { index: 38, word_tw: '馭法鐵衛' },
    duelist: { index: 39, word_tw: '決戰者' },
    fortress: { index: 40, word_tw: '要塞' },
});

/**輔助模板資訊列表 */
const SupporterModuleInfo: { [key in typeof SupporterModuleKey[number]]: Readonly<Info> } = Object.freeze({
    decelbinder: { index: 41, word_tw: '凝滯師' },
    bard: { index: 42, word_tw: '吟遊者' },
    abjurer: { index: 43, word_tw: '護佑者' },
    hexer: { index: 44, word_tw: '削弱者' },
    summoner: { index: 45, word_tw: '召喚師' },
    artificer: { index: 46, word_tw: '工匠' },
});

/**特種模板資訊列表 */
const SpecialistModuleInfo: { [key in typeof SpecialistModuleKey[number]]: Readonly<Info> } = Object.freeze({
    pushstroker: { index: 47, word_tw: '推擊手' },
    hookmaster: { index: 48, word_tw: '鈎索師' },
    executor: { index: 49, word_tw: '處決者' },
    merchant: { index: 50, word_tw: '行商' },
    dollkeeper: { index: 51, word_tw: '傀儡師' },
    ambusher: { index: 52, word_tw: '伏擊客' },
    trapmaster: { index: 53, word_tw: '陷阱師' },
    geek: { index: 54, word_tw: '怪傑' },
});

export const ModuleInfo = {
    ...VanguardModuleInfo,
    ...SniperModuleInfo,
    ...MedicModuleInfo,
    ...CasterModuleInfo,
    ...GuardModuleInfo,
    ...DefenderModuleInfo,
    ...SupporterModuleInfo,
    ...SpecialistModuleInfo,
} as const;
