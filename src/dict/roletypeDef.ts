import { Info } from './common';

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

export type RoleTypeKey = keyof RoleType;

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
