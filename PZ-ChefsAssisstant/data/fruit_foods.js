const fruit_foods = [
	{
		Icon: "Apple.png",
		Name: "Apple",
		Encumbrance: 0.2,
		Hunger: -15,
		Thirst: -7,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 5,
		"Cooked (mins)": 8,
		"Base ID": "Base.Apple",
	},
	{
		Icon: "Banana.png",
		Name: "Banana",
		Encumbrance: 0.2,
		Hunger: -17,
		Thirst: -5,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 5,
		"Cooked (mins)": 7,
		"Base ID": "Base.Banana",
	},
	{
		Icon: "BerryBlack.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -10,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryBlack",
	},
	{
		Icon: "BerryBlue.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -10,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryBlue",
	},
	{
		Icon: "BerryGeneric1.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -5,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryGeneric1",
	},
	{
		Icon: "BerryGeneric2.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -10,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryGeneric2",
	},
	{
		Icon: "BerryGeneric3.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -5,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryGeneric3",
	},
	{
		Icon: "BerryGeneric4.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -10,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryGeneric4",
	},
	{
		Icon: "BerryGeneric5.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -10,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryGeneric5",
	},
	{
		Icon: "BerryPoisonIvy.png",
		Name: "Berry",
		Encumbrance: 0.1,
		Hunger: -5,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BerryPoisonIvy",
	},
	{
		Icon: "BeautyBerries.png",
		Name: "Beauty Berry",
		Encumbrance: 0.1,
		Hunger: -10,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.BeautyBerry",
	},
	{
		Icon: "Winterberries.png",
		Name: "Winter Berry",
		Encumbrance: 0.1,
		Hunger: -5,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.WinterBerry",
	},
	{
		Icon: "HollyBerries.png",
		Name: "Holly Berry",
		Encumbrance: 0.1,
		Hunger: -5,
		Thirst: -1,
		Unhappiness: "Poison",
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 10,
		"Base ID": "Base.HollyBerry",
	},
	{
		Icon: "Cherry.png",
		Name: "Cherry",
		Encumbrance: 0.3,
		Hunger: -3,
		Thirst: -1,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 4,
		"Cooked (mins)": 9,
		"Base ID": "Base.Cherry",
	},
	{
		Icon: "Grapefruit.png",
		Name: "Grapefruit",
		Encumbrance: 0.3,
		Hunger: -20,
		Thirst: -50,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 8,
		"Base ID": "Base.Grapefruit",
	},
	{
		Icon: "Grapes.png",
		Name: "Grapes",
		Encumbrance: 0.2,
		Hunger: -15,
		Thirst: -5,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 5,
		"Cooked (mins)": 8,
		"Base ID": "Base.Grapes",
	},
	{
		Icon: "Lemon.png",
		Name: "Lemon",
		Encumbrance: 0.2,
		Hunger: -10,
		Thirst: -5,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 7,
		"Cooked (mins)": 9,
		"Base ID": "Base.Lemon",
	},
	{
		Icon: "Lime.png",
		Name: "Lime",
		Encumbrance: 0.2,
		Hunger: -10,
		Thirst: -5,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 7,
		"Cooked (mins)": 9,
		"Base ID": "Base.Lime",
	},
	{
		Icon: "Mango.png",
		Name: "Mango",
		Encumbrance: 0.3,
		Hunger: -20,
		Thirst: -13,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 14,
		"Base ID": "Base.Mango",
	},
	{
		Icon: "Orange.png",
		Name: "Orange",
		Encumbrance: 0.2,
		Hunger: -12,
		Thirst: -20,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 9,
		"Base ID": "Base.Orange",
	},
	{
		Icon: "Peach.png",
		Name: "Peach",
		Encumbrance: 0.2,
		Hunger: -12,
		Thirst: -5,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 5,
		"Cooked (mins)": 8,
		"Base ID": "Base.Peach",
	},
	{
		Icon: "Pear.png",
		Name: "Pear",
		Encumbrance: 0.2,
		Hunger: -15,
		Thirst: -7,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 5,
		"Cooked (mins)": 8,
		"Base ID": "Base.Pear",
	},
	{
		Icon: "Pineapple.png",
		Name: "Pineapple",
		Encumbrance: 0.3,
		Hunger: -25,
		Thirst: -13,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 14,
		"Base ID": "Base.Pineapple",
	},
	{
		Icon: "BerryStraw.png",
		Name: "Strawberries",
		Encumbrance: 0.1,
		Hunger: -5,
		Thirst: -5,
		Unhappiness: -10,
		"Fresh (days)": null,
		"Rotten (days)": 2,
		"Cooked (mins)": 5,
		"Base ID": "farming.Strewberrie",
	},
	{
		Icon: "Watermelon.png",
		Name: "Watermelon",
		Encumbrance: 3,
		Hunger: -60,
		Thirst: -140,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 6,
		"Cooked (mins)": 8,
		"Base ID": "Base.Watermelon",
	},
	{
		Icon: "WatermelonSmashed.png",
		Name: "Watermelon Chunks",
		Encumbrance: 0.6,
		Hunger: -12,
		Thirst: -25,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 2,
		"Cooked (mins)": 3,
		"Base ID": "Base.WatermelonSmashed",
	},
	{
		Icon: "WatermelonSliced.png",
		Name: "Watermelon Slice",
		Encumbrance: 0.3,
		Hunger: -6,
		Thirst: -20,
		Unhappiness: null,
		"Fresh (days)": null,
		"Rotten (days)": 3,
		"Cooked (mins)": 4,
		"Base ID": "Base.WatermelonSliced",
	},
];
