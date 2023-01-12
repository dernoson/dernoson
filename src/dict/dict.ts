import { ConstType } from '../utils';
import { Info } from './common';
import {
    CasterModuleKey,
    DefenderModuleKey,
    GuardModuleKey,
    MedicModuleKey,
    RoleModuleKey,
    SniperModuleKey,
    SpecialistModuleKey,
    SupporterModuleKey,
    VanguardModuleKey,
} from './modules';
// TODO 版本賦值，解決清流問題
/**幹員職業 */
export type RoleType = {
    /**先鋒 */
    vanguard: 'vanguard';
    /**狙擊 */
    sniper: 'sniper';
    /**醫療 */
    medic: 'medic';
    /**術師 */
    caster: 'caster';
    /**近衛 */
    guard: 'guard';
    /**重裝 */
    defender: 'defender';
    /**輔助 */
    supporter: 'supporter';
    /**特種 */
    specialist: 'specialist';
};

/**伺服器 */
export type Version = {
    tw: 'tw';
    jp: 'jp';
    cn: 'cn';
};

type RoleData = {
    /**幹員名稱 */
    rolename: string;
    /**幹員職業 */
    type: keyof RoleType;
    /**幹員模板 */
    module: RoleModuleKey;
    /**幹員稀有度 */
    star: 1 | 2 | 3 | 4 | 5 | 6;
    /**幹員可用伺服器 */
    version: keyof Version;
    conflict?: string;
};

/**先鋒幹員資訊 */
export type VanguardRole = RoleData & { type: 'vanguard'; module: typeof VanguardModuleKey[number] };
/**狙擊幹員資訊 */
export type SniperRole = RoleData & { type: 'sniper'; module: typeof SniperModuleKey[number] };
/**醫療幹員資訊 */
export type MedicRole = RoleData & { type: 'medic'; module: typeof MedicModuleKey[number] };
/**術師幹員資訊 */
export type CasterRole = RoleData & { type: 'caster'; module: typeof CasterModuleKey[number] };
/**近衛幹員資訊 */
export type GuardRole = RoleData & { type: 'guard'; module: typeof GuardModuleKey[number] };
/**重裝幹員資訊 */
export type DefenderRole = RoleData & { type: 'defender'; module: typeof DefenderModuleKey[number] };
/**輔助幹員資訊 */
export type SupporterRole = RoleData & { type: 'supporter'; module: typeof SupporterModuleKey[number] };
/**特種幹員資訊 */
export type SpecialistRole = RoleData & { type: 'specialist'; module: typeof SpecialistModuleKey[number] };
/**幹員資訊 */
export type Role = VanguardRole | SniperRole | MedicRole | CasterRole | GuardRole | DefenderRole | SupporterRole | SpecialistRole;

/**先鋒幹員key name */
export type VanguardRoleKey = keyof typeof VanguardRoleList;
/**狙擊幹員key name */
export type SniperRoleKey = keyof typeof SniperRoleList;
/**醫療幹員key name */
export type MedicRoleKey = keyof typeof MedicRoleList;
/**術師幹員key name */
export type CasterRoleKey = keyof typeof CasterRoleList;
/**近衛幹員key name */
export type GuardRoleKey = keyof typeof GuardRoleList;
/**重裝幹員key name */
export type DefenderRoleKey = keyof typeof DefenderRoleList;
/**輔助幹員key name */
export type SupporterRoleKey = keyof typeof SupporterRoleList;
/**特種幹員key name */
export type SpecialistRoleKey = keyof typeof SpecialistRoleList;
/**幹員Key name */
export type RoleKey = keyof typeof RoleList;

/**先鋒幹員列表 */
export const VanguardRoleList = ConstType<{ [key: string]: VanguardRole }>()({
    Bagpipe: {
        rolename: '風笛',
        type: 'vanguard',
        module: 'charger',
        star: 6,
        version: 'tw',
    },
    Siege: {
        rolename: '推進之王',
        type: 'vanguard',
        module: 'pioneer',
        star: 6,
        version: 'tw',
    },
    Saga: {
        rolename: '嵯峨',
        type: 'vanguard',
        module: 'pioneer',
        star: 6,
        version: 'tw',
    },
    Saileach: {
        rolename: '琴柳',
        type: 'vanguard',
        module: 'bearer',
        star: 6,
        version: 'tw',
    },
    Flametail: {
        rolename: '焰尾',
        type: 'vanguard',
        module: 'pioneer',
        star: 6,
        version: 'jp',
    },
    Chiave: {
        rolename: '賈維',
        type: 'vanguard',
        module: 'pioneer',
        star: 5,
        version: 'tw',
    },
    Elysium: {
        rolename: '極境',
        type: 'vanguard',
        module: 'bearer',
        star: 5,
        version: 'tw',
    },
    Grani: {
        rolename: '格拉尼',
        type: 'vanguard',
        module: 'charger',
        star: 5,
        version: 'tw',
    },
    Texas: {
        rolename: '德克薩斯',
        type: 'vanguard',
        module: 'pioneer',
        star: 5,
        version: 'tw',
    },
    Zima: {
        rolename: '凜冬',
        type: 'vanguard',
        module: 'pioneer',
        star: 5,
        version: 'tw',
    },
    WildMane: {
        rolename: '野鬃',
        type: 'vanguard',
        module: 'charger',
        star: 5,
        version: 'jp',
    },
    Myrtle: {
        rolename: '桃金娘',
        type: 'vanguard',
        module: 'bearer',
        star: 4,
        version: 'tw',
    },
    Vigna: {
        rolename: '紅豆',
        type: 'vanguard',
        module: 'charger',
        star: 4,
        version: 'tw',
    },
    Scavenger: {
        rolename: '清道夫',
        type: 'vanguard',
        module: 'pioneer',
        star: 4,
        version: 'tw',
    },
    Courier: {
        rolename: '訊使',
        type: 'vanguard',
        module: 'pioneer',
        star: 4,
        version: 'tw',
    },
    Beanstalk: {
        rolename: '豆苗',
        type: 'vanguard',
        module: 'tactician',
        star: 4,
        version: 'tw',
    },
    Plume: {
        rolename: '翎羽',
        type: 'vanguard',
        module: 'charger',
        star: 3,
        version: 'tw',
    },
    Vanilla: {
        rolename: '香草',
        type: 'vanguard',
        module: 'pioneer',
        star: 3,
        version: 'tw',
    },
    Fang: {
        rolename: '芬',
        type: 'vanguard',
        module: 'pioneer',
        star: 3,
        version: 'tw',
    },
    Yato: {
        rolename: '夜刀',
        type: 'vanguard',
        module: 'pioneer',
        star: 2,
        version: 'tw',
    },
} as const);
/**狙擊幹員列表 */
export const SniperRoleList = ConstType<{ [key: string]: SniperRole }>()({
    Rosmontis: {
        rolename: '迷迭香',
        type: 'sniper',
        module: 'flinger',
        star: 6,
        version: 'tw',
    },
    Poca: {
        rolename: '早露',
        type: 'sniper',
        module: 'besieger',
        star: 6,
        version: 'tw',
    },
    W: {
        rolename: 'W',
        type: 'sniper',
        module: 'artilleryman',
        star: 6,
        version: 'tw',
    },
    Schwarz: {
        rolename: '黑',
        type: 'sniper',
        module: 'heavyshooter',
        star: 6,
        version: 'tw',
    },
    Exusiai: {
        rolename: '能天使',
        type: 'sniper',
        module: 'marksman',
        star: 6,
        version: 'tw',
    },
    Ash: {
        rolename: 'ASH',
        type: 'sniper',
        module: 'marksman',
        star: 6,
        version: 'tw',
    },
    Archetto: {
        rolename: '空弦',
        type: 'sniper',
        module: 'marksman',
        star: 6,
        version: 'tw',
    },
    Sniperchen: {
        rolename: '假日威龍陳',
        type: 'sniper',
        module: 'spreadshooter',
        star: 6,
        version: 'tw',
    },
    April: {
        rolename: '四月',
        type: 'sniper',
        module: 'marksman',
        star: 5,
        version: 'tw',
    },
    Andreana: {
        rolename: '安哲拉',
        type: 'sniper',
        module: 'deadeye',
        star: 5,
        version: 'tw',
    },
    Sesa: {
        rolename: '懾砂',
        type: 'sniper',
        module: 'artilleryman',
        star: 5,
        version: 'tw',
    },
    Greythroat: {
        rolename: '灰喉',
        type: 'sniper',
        module: 'marksman',
        star: 5,
        version: 'tw',
    },
    Executor: {
        rolename: '送葬人',
        type: 'sniper',
        module: 'spreadshooter',
        star: 5,
        version: 'tw',
    },
    Firewatch: {
        rolename: '守林人',
        type: 'sniper',
        module: 'deadeye',
        star: 5,
        version: 'tw',
    },
    Provence: {
        rolename: '普羅旺斯',
        type: 'sniper',
        module: 'heavyshooter',
        star: 5,
        version: 'tw',
    },
    Meteorite: {
        rolename: '隕星',
        type: 'sniper',
        module: 'artilleryman',
        star: 5,
        version: 'tw',
    },
    Platinum: {
        rolename: '白金',
        type: 'sniper',
        module: 'marksman',
        star: 5,
        version: 'tw',
    },
    Bluepoison: {
        rolename: '藍毒',
        type: 'sniper',
        module: 'marksman',
        star: 5,
        version: 'tw',
    },
    Aosta: {
        rolename: '奧斯塔',
        type: 'sniper',
        module: 'spreadshooter',
        star: 5,
        version: 'tw',
    },
    Toddifons: {
        rolename: '熔泉',
        type: 'sniper',
        module: 'besieger',
        star: 5,
        version: 'tw',
    },
    Fartooth: {
        rolename: '遠牙',
        type: 'sniper',
        module: 'deadeye',
        star: 6,
        version: 'jp',
    },
    Aciddrop: {
        rolename: '酸糖',
        type: 'sniper',
        module: 'heavyshooter',
        star: 4,
        version: 'tw',
    },
    Ambriel: {
        rolename: '安比爾',
        type: 'sniper',
        module: 'deadeye',
        star: 4,
        version: 'tw',
    },
    May: {
        rolename: '梅',
        type: 'sniper',
        module: 'marksman',
        star: 4,
        version: 'tw',
    },
    Vermeil: {
        rolename: '紅雲',
        type: 'sniper',
        module: 'marksman',
        star: 4,
        version: 'tw',
    },
    Shirayuki: {
        rolename: '白雪',
        type: 'sniper',
        module: 'artilleryman',
        star: 4,
        version: 'tw',
    },
    Meteor: {
        rolename: '流星',
        type: 'sniper',
        module: 'marksman',
        star: 4,
        version: 'tw',
    },
    Jessica: {
        rolename: '杰西卡',
        type: 'sniper',
        module: 'marksman',
        star: 4,
        version: 'tw',
    },
    Pinecone: {
        rolename: '松果',
        type: 'sniper',
        module: 'spreadshooter',
        star: 4,
        version: 'tw',
    },
    Catapult: {
        rolename: '空爆',
        type: 'sniper',
        module: 'artilleryman',
        star: 3,
        version: 'tw',
    },
    Adnachiel: {
        rolename: '安德切爾',
        type: 'sniper',
        module: 'marksman',
        star: 3,
        version: 'tw',
    },
    Kroos: {
        rolename: '克洛絲',
        type: 'sniper',
        module: 'marksman',
        star: 3,
        version: 'tw',
    },
    Rangers: {
        rolename: '巡林者',
        type: 'sniper',
        module: 'marksman',
        star: 2,
        version: 'tw',
    },
    Justiceknight: {
        rolename: '正義騎士號',
        type: 'sniper',
        module: 'marksman',
        star: 1,
        version: 'jp',
    },
} as const);
/**醫療幹員列表 */
export const MedicRoleList = ConstType<{ [key: string]: MedicRole }>()({
    Nightingale: {
        rolename: '夜鶯',
        type: 'medic',
        module: 'multitarget',
        star: 6,
        version: 'tw',
    },
    Shining: {
        rolename: '閃靈',
        type: 'medic',
        module: 'medic',
        star: 6,
        version: 'tw',
    },
    Kaltsit: {
        rolename: '凱爾希',
        type: 'medic',
        module: 'medic',
        star: 6,
        version: 'tw',
    },
    Whisperain: {
        rolename: '絮雨',
        type: 'medic',
        module: 'therapist',
        star: 5,
        version: 'tw',
    },
    Folinic: {
        rolename: '亞葉',
        type: 'medic',
        module: 'medic',
        star: 5,
        version: 'tw',
    },
    Breeze: {
        rolename: '微風',
        type: 'medic',
        module: 'multitarget',
        star: 5,
        version: 'tw',
    },
    Ceylon: {
        rolename: '錫蘭',
        type: 'medic',
        module: 'therapist',
        star: 5,
        version: 'tw',
    },
    Warfarin: {
        rolename: '華法琳',
        type: 'medic',
        module: 'medic',
        star: 5,
        version: 'tw',
    },
    Silence: {
        rolename: '赫默',
        type: 'medic',
        module: 'medic',
        star: 5,
        version: 'tw',
    },
    Ptilopsis: {
        rolename: '白面鴞',
        type: 'medic',
        module: 'multitarget',
        star: 5,
        version: 'tw',
    },
    Tuye: {
        rolename: '圖耶',
        type: 'medic',
        module: 'medic',
        star: 5,
        version: 'tw',
    },
    Purestream: {
        rolename: '清流',
        type: 'medic',
        module: 'therapist',
        star: 5,
        version: 'jp',
    },
    Mulberry: {
        rolename: '桑葚',
        type: 'medic',
        module: 'wandering',
        star: 5,
        version: 'tw',
    },
    Honeyberry: {
        rolename: '蜜莓',
        type: 'medic',
        module: 'wandering',
        star: 5,
        version: 'jp',
    },
    Sussurro: {
        rolename: '蘇蘇洛',
        type: 'medic',
        module: 'medic',
        star: 4,
        version: 'tw',
    },
    Perfumer: {
        rolename: '調香師',
        type: 'medic',
        module: 'multitarget',
        star: 4,
        version: 'tw',
    },
    Gavial: {
        rolename: '嘉維爾',
        type: 'medic',
        module: 'medic',
        star: 4,
        version: 'tw',
    },
    Myrrh: {
        rolename: '末藥',
        type: 'medic',
        module: 'medic',
        star: 4,
        version: 'tw',
    },
    Ansel: {
        rolename: '安賽爾',
        type: 'medic',
        module: 'medic',
        star: 3,
        version: 'tw',
    },
    Hibiscus: {
        rolename: '芙蓉',
        type: 'medic',
        module: 'medic',
        star: 3,
        version: 'tw',
    },
    Lancet2: {
        rolename: 'Lancet-2',
        type: 'medic',
        module: 'medic',
        star: 1,
        version: 'tw',
    },
} as const);
/**術師幹員列表 */
export const CasterRoleList = ConstType<{ [key: string]: CasterRole }>()({
    Ceobe: {
        rolename: '刻俄柏',
        type: 'caster',
        module: 'core',
        star: 6,
        version: 'tw',
    },
    Ifrit: {
        rolename: '伊芙利特',
        type: 'caster',
        module: 'blast',
        star: 6,
        version: 'tw',
    },
    Eyjafjalla: {
        rolename: '艾雅法拉',
        type: 'caster',
        module: 'core',
        star: 6,
        version: 'tw',
    },
    Mostima: {
        rolename: '莫斯提馬',
        type: 'caster',
        module: 'splash',
        star: 6,
        version: 'tw',
    },
    Dusk: {
        rolename: '夕',
        type: 'caster',
        module: 'splash',
        star: 6,
        version: 'tw',
    },
    Passenger: {
        rolename: '異客',
        type: 'caster',
        module: 'chain',
        star: 6,
        version: 'tw',
    },
    Carnelian: {
        rolename: '卡涅利安',
        type: 'caster',
        module: 'phalanx',
        star: 6,
        version: 'tw',
    },
    Amiya: {
        rolename: '阿米婭',
        type: 'caster',
        module: 'core',
        star: 5,
        version: 'tw',
    },
    Nightmare: {
        rolename: '夜魔',
        type: 'caster',
        module: 'core',
        star: 5,
        version: 'tw',
    },
    Absinthe: {
        rolename: '苦艾',
        type: 'caster',
        module: 'core',
        star: 5,
        version: 'tw',
    },
    Tomimi: {
        rolename: '特米米',
        type: 'caster',
        module: 'core',
        star: 5,
        version: 'tw',
    },
    Skyfire: {
        rolename: '天火',
        type: 'caster',
        module: 'splash',
        star: 5,
        version: 'tw',
    },
    Leonhardt: {
        rolename: '萊恩哈特',
        type: 'caster',
        module: 'splash',
        star: 5,
        version: 'tw',
    },
    Leizi: {
        rolename: '驚蜇',
        type: 'caster',
        module: 'chain',
        star: 5,
        version: 'tw',
    },
    Beeswax: {
        rolename: '蜜蠟',
        type: 'caster',
        module: 'phalanx',
        star: 5,
        version: 'tw',
    },
    Mint: {
        rolename: '薄綠',
        type: 'caster',
        module: 'phalanx',
        star: 5,
        version: 'tw',
    },
    Iris: {
        rolename: '愛麗絲',
        type: 'caster',
        module: 'mystic',
        star: 5,
        version: 'tw',
    },
    Lavathepurgatory: {
        rolename: '炎獄炎熔',
        type: 'caster',
        module: 'splash',
        star: 5,
        version: 'tw',
    },
    Corroserum: {
        rolename: '蝕清',
        type: 'caster',
        module: 'blast',
        star: 5,
        version: 'jp',
    },
    Haze: {
        rolename: '夜煙',
        type: 'caster',
        module: 'core',
        star: 4,
        version: 'tw',
    },
    Gitano: {
        rolename: '遠山',
        type: 'caster',
        module: 'splash',
        star: 4,
        version: 'tw',
    },
    Greyy: {
        rolename: '格雷伊',
        type: 'caster',
        module: 'splash',
        star: 4,
        version: 'tw',
    },
    Click: {
        rolename: '卡達',
        type: 'caster',
        module: 'mechaccord',
        star: 4,
        version: 'tw',
    },
    Indigo: {
        rolename: '深靛',
        type: 'caster',
        module: 'mystic',
        star: 4,
        version: 'tw',
    },
    Pudding: {
        rolename: '布丁',
        type: 'caster',
        module: 'chain',
        star: 4,
        version: 'jp',
    },
    Steward: {
        rolename: '史都華德',
        type: 'caster',
        module: 'core',
        star: 3,
        version: 'tw',
    },
    Lava: {
        rolename: '炎熔',
        type: 'caster',
        module: 'splash',
        star: 3,
        version: 'tw',
    },
    Durin: {
        rolename: '杜林',
        type: 'caster',
        module: 'core',
        star: 2,
        version: 'tw',
    },
    F12: {
        rolename: '12F',
        type: 'caster',
        module: 'splash',
        star: 2,
        version: 'tw',
    },
} as const);
/**近衛幹員列表 */
export const GuardRoleList = ConstType<{ [key: string]: GuardRole }>()({
    Surtr: {
        rolename: '史爾特爾',
        type: 'guard',
        module: 'artsfighter',
        star: 6,
        version: 'tw',
    },
    Thorns: {
        rolename: '棘刺',
        type: 'guard',
        module: 'lord',
        star: 6,
        version: 'tw',
    },
    Blaze: {
        rolename: '煌',
        type: 'guard',
        module: 'centurion',
        star: 6,
        version: 'tw',
    },
    Hellagur: {
        rolename: '赫拉格',
        type: 'guard',
        module: 'musha',
        star: 6,
        version: 'tw',
    },
    Chen: {
        rolename: '陳',
        type: 'guard',
        module: 'swordmaster',
        star: 6,
        version: 'tw',
    },
    Skadi: {
        rolename: '斯卡蒂',
        type: 'guard',
        module: 'dreadnought',
        star: 6,
        version: 'tw',
    },
    Silverash: {
        rolename: '銀灰',
        type: 'guard',
        module: 'lord',
        star: 6,
        version: 'tw',
    },
    Mountain: {
        rolename: '山',
        type: 'guard',
        module: 'fighter',
        star: 6,
        version: 'tw',
    },
    Pallas: {
        rolename: '帕拉斯',
        type: 'guard',
        module: 'instructor',
        star: 6,
        version: 'tw',
    },
    Guardnearl: {
        rolename: '耀騎士臨光',
        type: 'guard',
        module: 'dreadnought',
        star: 6,
        version: 'jp',
    },
    Whislash: {
        rolename: '鞭刃',
        type: 'guard',
        module: 'instructor',
        star: 5,
        version: 'tw',
    },
    Flint: {
        rolename: '燧石',
        type: 'guard',
        module: 'fighter',
        star: 5,
        version: 'tw',
    },
    Ayerscarpe: {
        rolename: '斷崖',
        type: 'guard',
        module: 'lord',
        star: 5,
        version: 'tw',
    },
    Sideroca: {
        rolename: '鑄鐵',
        type: 'guard',
        module: 'artsfighter',
        star: 5,
        version: 'tw',
    },
    Bibeak: {
        rolename: '柏喙',
        type: 'guard',
        module: 'swordmaster',
        star: 5,
        version: 'tw',
    },
    Broca: {
        rolename: '布洛卡',
        type: 'guard',
        module: 'centurion',
        star: 5,
        version: 'tw',
    },
    Flamebringer: {
        rolename: '炎客',
        type: 'guard',
        module: 'dreadnought',
        star: 5,
        version: 'tw',
    },
    Astesia: {
        rolename: '星極',
        type: 'guard',
        module: 'artsfighter',
        star: 5,
        version: 'tw',
    },
    Swire: {
        rolename: '詩懷雅',
        type: 'guard',
        module: 'instructor',
        star: 5,
        version: 'tw',
    },
    Savage: {
        rolename: '暴行',
        type: 'guard',
        module: 'centurion',
        star: 5,
        version: 'tw',
    },
    Specter: {
        rolename: '幽靈鯊',
        type: 'guard',
        module: 'centurion',
        star: 5,
        version: 'tw',
    },
    Lappland: {
        rolename: '拉普蘭德',
        type: 'guard',
        module: 'lord',
        star: 5,
        version: 'tw',
    },
    Indra: {
        rolename: '因陀羅',
        type: 'guard',
        module: 'fighter',
        star: 5,
        version: 'tw',
    },
    Franka: {
        rolename: '芙蘭卡',
        type: 'guard',
        module: 'dreadnought',
        star: 5,
        version: 'tw',
    },
    Guardamiya: {
        rolename: '阿米婭',
        type: 'guard',
        module: 'artsfighter',
        star: 5,
        version: 'tw',
    },
    Tachanka: {
        rolename: 'TACHANKA',
        type: 'guard',
        module: 'swordmaster',
        star: 5,
        version: 'tw',
    },
    Tequila: {
        rolename: '龍舌蘭',
        type: 'guard',
        module: 'liberator',
        star: 5,
        version: 'tw',
    },
    Lapluma: {
        rolename: '羽毛筆',
        type: 'guard',
        module: 'reaper',
        star: 5,
        version: 'tw',
    },
    Arene: {
        rolename: '芳汀',
        type: 'guard',
        module: 'lord',
        star: 4,
        version: 'tw',
    },
    Cutter: {
        rolename: '刻刀',
        type: 'guard',
        module: 'swordmaster',
        star: 4,
        version: 'tw',
    },
    Conviction: {
        rolename: '斷罪者',
        type: 'guard',
        module: 'dreadnought',
        star: 4,
        version: 'tw',
    },
    Utage: {
        rolename: '宴',
        type: 'guard',
        module: 'musha',
        star: 4,
        version: 'tw',
    },
    Beehunter: {
        rolename: '獵蜂',
        type: 'guard',
        module: 'fighter',
        star: 4,
        version: 'tw',
    },
    Mousse: {
        rolename: '慕斯',
        type: 'guard',
        module: 'artsfighter',
        star: 4,
        version: 'tw',
    },
    Estelle: {
        rolename: '艾絲黛爾',
        type: 'guard',
        module: 'centurion',
        star: 4,
        version: 'tw',
    },
    Frostleaf: {
        rolename: '霜葉',
        type: 'guard',
        module: 'lord',
        star: 4,
        version: 'tw',
    },
    Matoimaru: {
        rolename: '纏丸',
        type: 'guard',
        module: 'dreadnought',
        star: 4,
        version: 'tw',
    },
    Dobermann: {
        rolename: '杜賓',
        type: 'guard',
        module: 'instructor',
        star: 4,
        version: 'tw',
    },
    Jackie: {
        rolename: '傑克',
        type: 'guard',
        module: 'fighter',
        star: 4,
        version: 'tw',
    },
    Popukar: {
        rolename: '泡芙卡',
        type: 'guard',
        module: 'centurion',
        star: 3,
        version: 'tw',
    },
    Midnight: {
        rolename: '月見夜',
        type: 'guard',
        module: 'lord',
        star: 3,
        version: 'tw',
    },
    Melantha: {
        rolename: '玫蘭莎',
        type: 'guard',
        module: 'dreadnought',
        star: 3,
        version: 'tw',
    },
    Castle3: {
        rolename: 'Castle-3',
        type: 'guard',
        module: 'dreadnought',
        star: 1,
        version: 'tw',
    },
} as const);
/**重裝幹員列表 */
export const DefenderRoleList = ConstType<{ [key: string]: DefenderRole }>()({
    Hoshiguma: {
        rolename: '星熊',
        type: 'defender',
        module: 'protector',
        star: 6,
        version: 'tw',
    },
    Nian: {
        rolename: '年',
        type: 'defender',
        module: 'protector',
        star: 6,
        version: 'tw',
    },
    Saria: {
        rolename: '塞雷婭',
        type: 'defender',
        module: 'guardian',
        star: 6,
        version: 'tw',
    },
    Blemishine: {
        rolename: '瑕光',
        type: 'defender',
        module: 'guardian',
        star: 6,
        version: 'tw',
    },
    Mudrock: {
        rolename: '泥岩',
        type: 'defender',
        module: 'juggernaut',
        star: 6,
        version: 'tw',
    },
    Eunectes: {
        rolename: '森蚺',
        type: 'defender',
        module: 'duelist',
        star: 6,
        version: 'tw',
    },
    Croissant: {
        rolename: '可頌',
        type: 'defender',
        module: 'protector',
        star: 5,
        version: 'tw',
    },
    Bison: {
        rolename: '拜松',
        type: 'defender',
        module: 'protector',
        star: 5,
        version: 'tw',
    },
    Liskarm: {
        rolename: '雷蛇',
        type: 'defender',
        module: 'protector',
        star: 5,
        version: 'tw',
    },
    Nearl: {
        rolename: '臨光',
        type: 'defender',
        module: 'guardian',
        star: 5,
        version: 'tw',
    },
    Hung: {
        rolename: '吽',
        type: 'defender',
        module: 'guardian',
        star: 5,
        version: 'tw',
    },
    Vulcan: {
        rolename: '火神',
        type: 'defender',
        module: 'juggernaut',
        star: 5,
        version: 'tw',
    },
    Asbestos: {
        rolename: '石棉',
        type: 'defender',
        module: 'artsprotector',
        star: 5,
        version: 'tw',
    },
    Blitz: {
        rolename: 'BLITZ',
        type: 'defender',
        module: 'protector',
        star: 5,
        version: 'tw',
    },
    Heavyrain: {
        rolename: '暴雨',
        type: 'defender',
        module: 'protector',
        star: 5,
        version: 'tw',
    },
    Ashlock: {
        rolename: '灰毫',
        type: 'defender',
        module: 'fortress',
        star: 5,
        version: 'jp',
    },
    Cuora: {
        rolename: '蛇屠箱',
        type: 'defender',
        module: 'protector',
        star: 4,
        version: 'tw',
    },
    Matterhorn: {
        rolename: '角峰',
        type: 'defender',
        module: 'protector',
        star: 4,
        version: 'tw',
    },
    Bubble: {
        rolename: '泡泡',
        type: 'defender',
        module: 'protector',
        star: 4,
        version: 'tw',
    },
    Gummy: {
        rolename: '古米',
        type: 'defender',
        module: 'guardian',
        star: 4,
        version: 'tw',
    },
    Durnar: {
        rolename: '堅雷',
        type: 'defender',
        module: 'artsprotector',
        star: 4,
        version: 'tw',
    },
    Cardigan: {
        rolename: '卡緹',
        type: 'defender',
        module: 'protector',
        star: 3,
        version: 'tw',
    },
    Beagle: {
        rolename: '米格魯',
        type: 'defender',
        module: 'protector',
        star: 3,
        version: 'tw',
    },
    Spot: {
        rolename: '斑點',
        type: 'defender',
        module: 'guardian',
        star: 3,
        version: 'tw',
    },
    Noircorne: {
        rolename: '黑角',
        type: 'defender',
        module: 'protector',
        star: 2,
        version: 'tw',
    },
} as const);
/**輔助幹員列表 */
export const SupporterRoleList = ConstType<{ [key: string]: SupporterRole }>()({
    Suzuran: {
        rolename: '鈴蘭',
        type: 'supporter',
        module: 'decelbinder',
        star: 6,
        version: 'tw',
    },
    Magallan: {
        rolename: '麥哲倫',
        type: 'supporter',
        module: 'summoner',
        star: 6,
        version: 'tw',
    },
    Angelina: {
        rolename: '安潔莉娜',
        type: 'supporter',
        module: 'decelbinder',
        star: 6,
        version: 'tw',
    },
    Supporterskadi: {
        rolename: '濁心斯卡蒂',
        type: 'supporter',
        module: 'bard',
        star: 6,
        version: 'tw',
    },
    Scene: {
        rolename: '稀音',
        type: 'supporter',
        module: 'summoner',
        star: 5,
        version: 'tw',
    },
    Tsukinogi: {
        rolename: '月禾',
        type: 'supporter',
        module: 'abjurer',
        star: 5,
        version: 'tw',
    },
    Shamare: {
        rolename: '巫戀',
        type: 'supporter',
        module: 'hexer',
        star: 5,
        version: 'tw',
    },
    Glaucus: {
        rolename: '格勞克斯',
        type: 'supporter',
        module: 'decelbinder',
        star: 5,
        version: 'tw',
    },
    Sora: {
        rolename: '空',
        type: 'supporter',
        module: 'bard',
        star: 5,
        version: 'tw',
    },
    Istina: {
        rolename: '真理',
        type: 'supporter',
        module: 'decelbinder',
        star: 5,
        version: 'tw',
    },
    Pramanix: {
        rolename: '初雪',
        type: 'supporter',
        module: 'hexer',
        star: 5,
        version: 'tw',
    },
    Mayer: {
        rolename: '梅爾',
        type: 'supporter',
        module: 'summoner',
        star: 5,
        version: 'tw',
    },
    Podenco: {
        rolename: '波登可',
        type: 'supporter',
        module: 'decelbinder',
        star: 4,
        version: 'tw',
    },
    Earthspirit: {
        rolename: '地靈',
        type: 'supporter',
        module: 'decelbinder',
        star: 4,
        version: 'tw',
    },
    Deepcolor: {
        rolename: '深海色',
        type: 'supporter',
        module: 'summoner',
        star: 4,
        version: 'tw',
    },
    Roberta: {
        rolename: '羅比菈塔',
        type: 'supporter',
        module: 'artificer',
        star: 4,
        version: 'jp',
    },
    Orchid: {
        rolename: '梓蘭',
        type: 'supporter',
        module: 'decelbinder',
        star: 3,
        version: 'tw',
    },
} as const);
/**特種幹員列表 */
export const SpecialistRoleList = ConstType<{ [key: string]: SpecialistRole }>()({
    Weedy: {
        rolename: '溫蒂',
        type: 'specialist',
        module: 'pushstroker',
        star: 6,
        version: 'tw',
    },
    Phantom: {
        rolename: '魁影',
        type: 'specialist',
        module: 'executor',
        star: 6,
        version: 'tw',
    },
    Aak: {
        rolename: '阿',
        type: 'specialist',
        module: 'geek',
        star: 6,
        version: 'tw',
    },
    Gladiia: {
        rolename: '歌蕾蒂婭',
        type: 'specialist',
        module: 'hookmaster',
        star: 6,
        version: 'tw',
    },
    Mizuki: {
        rolename: '水月',
        type: 'specialist',
        module: 'ambusher',
        star: 6,
        version: 'tw',
    },
    Snowsant: {
        rolename: '雪雉',
        type: 'specialist',
        module: 'hookmaster',
        star: 5,
        version: 'tw',
    },
    Waaifu: {
        rolename: '槐琥',
        type: 'specialist',
        module: 'executor',
        star: 5,
        version: 'tw',
    },
    Feater: {
        rolename: '食鐵獸',
        type: 'specialist',
        module: 'pushstroker',
        star: 5,
        version: 'tw',
    },
    Manticore: {
        rolename: '獅蠍',
        type: 'specialist',
        module: 'ambusher',
        star: 5,
        version: 'tw',
    },
    Cliffheart: {
        rolename: '崖心',
        type: 'specialist',
        module: 'hookmaster',
        star: 5,
        version: 'tw',
    },
    Projektred: {
        rolename: '紅',
        type: 'specialist',
        module: 'executor',
        star: 5,
        version: 'tw',
    },
    Frost: {
        rolename: 'FROST',
        type: 'specialist',
        module: 'trapmaster',
        star: 5,
        version: 'tw',
    },
    MrNothing: {
        rolename: '烏有',
        type: 'specialist',
        module: 'merchant',
        star: 5,
        version: 'tw',
    },
    Bena: {
        rolename: '貝娜',
        type: 'specialist',
        module: 'dollkeeper',
        star: 5,
        version: 'tw',
    },
    Kirara: {
        rolename: '綺良',
        type: 'specialist',
        module: 'ambusher',
        star: 5,
        version: 'tw',
    },
    Jaye: {
        rolename: '孑',
        type: 'specialist',
        module: 'merchant',
        star: 4,
        version: 'tw',
    },
    Ethan: {
        rolename: '伊桑',
        type: 'specialist',
        module: 'ambusher',
        star: 4,
        version: 'tw',
    },
    Shaw: {
        rolename: '阿消',
        type: 'specialist',
        module: 'pushstroker',
        star: 4,
        version: 'tw',
    },
    Rope: {
        rolename: '暗索',
        type: 'specialist',
        module: 'hookmaster',
        star: 4,
        version: 'tw',
    },
    Gravel: {
        rolename: '礫',
        type: 'specialist',
        module: 'executor',
        star: 4,
        version: 'tw',
    },
    Thermalex: {
        rolename: 'THRM-EX',
        type: 'specialist',
        module: 'executor',
        star: 1,
        version: 'tw',
    },
} as const);

/**幹員列表 */
export const RoleList = {
    ...VanguardRoleList,
    ...SniperRoleList,
    ...MedicRoleList,
    ...CasterRoleList,
    ...GuardRoleList,
    ...DefenderRoleList,
    ...SupporterRoleList,
    ...SpecialistRoleList,
} as const;

/**職業資訊列表 */
export const RoleTypeInfo: { [key in keyof RoleType]: Readonly<Info> } = Object.freeze({
    vanguard: { index: 1, word_tw: '先鋒' },
    sniper: { index: 2, word_tw: '狙擊' },
    medic: { index: 3, word_tw: '醫療' },
    caster: { index: 4, word_tw: '術師' },
    guard: { index: 5, word_tw: '近衛' },
    defender: { index: 6, word_tw: '重裝' },
    supporter: { index: 7, word_tw: '輔助' },
    specialist: { index: 8, word_tw: '特種' },
});
