import { ConstType } from '../utils';
import { RoleTypeKey } from './roletypeDef';

/**模板 key name */
export const moduleKey = ConstType<Record<RoleTypeKey, readonly string[]>>()({
    vanguard: ['pioneer', 'charger', 'bearer', 'tactician', 'agent'],
    sniper: ['marksman', 'artilleryman', 'heavyshooter', 'deadeye', 'besieger', 'flinger', 'spreadshooter'],
    medic: ['medic', 'multitarget', 'therapist', 'wandering', 'incantation', 'chainheal'], // TODO 鍊癒師模板英譯
    caster: ['core', 'splash', 'mystic', 'mechaccord', 'chain', 'blast', 'phalanx'],
    guard: [
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
        'heavysword', // TODO 重劍手模板英譯
    ],
    defender: ['protector', 'guardian', 'juggernaut', 'artsprotector', 'duelist', 'fortress', 'sentry'], // TODO 哨戒鐵衛英譯
    supporter: ['decelbinder', 'bard', 'abjurer', 'hexer', 'summoner', 'artificer'],
    specialist: ['pushstroker', 'hookmaster', 'executor', 'merchant', 'dollkeeper', 'ambusher', 'trapmaster', 'geek'],
} as const);

export type VanguardModuleKey = typeof moduleKey.vanguard[number];
export type SniperModuleKey = typeof moduleKey.sniper[number];
export type MedicModuleKey = typeof moduleKey.medic[number];
export type CasterModuleKey = typeof moduleKey.caster[number];
export type GuardModuleKey = typeof moduleKey.guard[number];
export type DefenderModuleKey = typeof moduleKey.defender[number];
export type SupporterModuleKey = typeof moduleKey.supporter[number];
export type SpecialistModuleKey = typeof moduleKey.specialist[number];

export type ModuleKey =
    | VanguardModuleKey
    | SniperModuleKey
    | MedicModuleKey
    | CasterModuleKey
    | GuardModuleKey
    | DefenderModuleKey
    | SupporterModuleKey
    | SpecialistModuleKey;

/**模板繁體中文名 */
export const modulename_tw: Readonly<Record<ModuleKey, string>> = {
    abjurer: '護佑者',
    agent: '情報官',
    ambusher: '伏擊客',
    artificer: '工匠',
    artilleryman: '炮手',
    artsfighter: '術戰者',
    artsprotector: '馭法鐵衛',
    bard: '吟遊者',
    bearer: '執旗手',
    besieger: '攻城手',
    blast: '轟擊術師',
    centurion: '強攻手',
    chain: '鏈術師',
    chainheal: '鍊癒師',
    charger: '衝鋒手',
    core: '中堅術師',
    deadeye: '神射手',
    decelbinder: '凝滯師',
    dollkeeper: '傀儡師',
    dreadnought: '無畏者',
    duelist: '決戰者',
    executor: '處決者',
    fighter: '鬥士',
    flinger: '投擲手',
    fortress: '要塞',
    geek: '怪傑',
    guardian: '守護者',
    heavyshooter: '重射手',
    heavysword: '重劍手',
    hexer: '削弱者',
    hookmaster: '鈎索師',
    incantation: '咒癒師',
    instructor: '教官',
    juggernaut: '不屈者',
    liberator: '解放者',
    lord: '領主',
    marksman: '速射手',
    mechaccord: '馭械術師',
    medic: '醫師',
    merchant: '行商',
    multitarget: '群癒師',
    musha: '武者',
    mystic: '秘術師',
    phalanx: '陣法術師',
    pioneer: '尖兵',
    protector: '鐵衛',
    pushstroker: '推擊手',
    reaper: '收割者',
    sentry: '哨戒鐵衛',
    splash: '擴散術師',
    spreadshooter: '散射手',
    summoner: '召喚師',
    swordmaster: '劍豪',
    tactician: '戰術家',
    therapist: '療養師',
    trapmaster: '陷阱師',
    wandering: '行醫',
};
