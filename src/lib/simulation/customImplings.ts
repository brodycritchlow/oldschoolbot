import { LootTable, Openables } from 'oldschooljs';
import SimpleOpenable from 'oldschooljs/dist/structures/SimpleOpenable';

import { RuneTable } from './seedTable';
import { BattlestaffTable, StaffOrbTable } from './sharedTables';

export const InfernalImpling = new SimpleOpenable({
	id: 50_043,
	name: 'Infernal impling jar',
	aliases: ['infernal impling', 'infernal imp'],
	table: new LootTable()
		.every('Tokkul', [500, 2000])
		.add('Tokkul', [5000, 10_000])
		.add('Chaos rune', [500, 1000])
		.add('Onyx bolt tips', [100, 300])
		.add('Lava scale', [20, 50])
		.add('Infernal eel', [10, 15])
		.oneIn(
			10,
			new LootTable()
				.add('Toktz-xil-ul')
				.add('Toktz-xil-ak')
				.add('Toktz-xil-ek')
				.add('Tzhaar-ket-om')
				.add('Toktz-mej-tal')
				.add('Tzhaar-ket-em')
				.add('Obsidian cape')
				.add('Toktz-ket-xil')
		)
		.add('Lava scale shard', [50, 150])
		.add(
			new LootTable().add('Uncut sapphire').add('Uncut emerald').add('Uncut ruby').add('Uncut diamond'),
			[15, 25]
		)
		.oneIn(20, new LootTable().add('Obsidian helmet').add('Obsidian platebody').add('Obsidian platelegs'))
		.tertiary(10, 'Clue scroll (hard)')
		.tertiary(50, 'Clue scroll (elite)')
		.tertiary(1_000_000, 'Uncut onyx')
});

export const EternalImpling = new SimpleOpenable({
	id: 50_044,
	name: 'Eternal impling jar',
	aliases: ['eternal impling', 'eternal imp'],
	table: new LootTable()
		.every(RuneTable, [10, 15])
		.add(BattlestaffTable, [12, 22])
		.add(StaffOrbTable, [50, 100])
		.add('Pure essence', [500, 1000])
		.add('Magic logs', [150, 200])
		.add('Magic seed', [5, 20])
		.add('Clue scroll (easy)', [1, 5])
		.add(RuneTable, [5, 10])
		.tertiary(8, 'Clue scroll (grandmaster)')
		.tertiary(1_000_000, 'Eternal crystal')
});

export const MysteryImpling = new SimpleOpenable({
	id: 50_045,
	name: 'Mystery impling jar',
	aliases: ['mystery impling', 'mystery imp'],
	table: new LootTable()
		.add('Untradeable Mystery Box')
		.add('Tradeable Mystery Box')
		.add('Pet Mystery Box')
		.add('Equippable mystery box')
		.add('Clue scroll (grandmaster)')
		.add('Clue scroll (hard)')
		.tertiary(1_000_000, 'Mystery impling jar')
});

Openables.set(InfernalImpling.id, InfernalImpling);
Openables.set(EternalImpling.id, EternalImpling);
Openables.set(MysteryImpling.id, MysteryImpling);
