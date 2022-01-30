// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [

    {
		section: "PokeBattleArena",
	},
    {
		name: "[Gen 3] PokeBattleArena",
		mod: 'gen6',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Tier Shift Mod'],
		banlist: [
			'Mythical', 'Mega',
        ],
 
	},
];