/**職業 key name */
export const roleTypeKey = ['vanguard', 'sniper', 'medic', 'caster', 'guard', 'defender', 'supporter', 'specialist'] as const;

export type RoleTypeKey = typeof roleTypeKey[number];

/**職業繁體中文名 */
export const roletypename_tw: Readonly<Record<RoleTypeKey, string>> = {
    caster: '術師',
    defender: '重裝',
    guard: '近衛',
    medic: '醫療',
    sniper: '狙擊',
    specialist: '特種',
    supporter: '輔助',
    vanguard: '先鋒',
};
