const fish_foods = [
	{
		Icon: "FishBass.png",
		Name: "Bass",
		Encumbrance: 1.1,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.Bass",
	},
	{
		Icon: "FishCatfish.png",
		Name: "Catfish",
		Encumbrance: 0.4,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.Catfish",
	},
	{
		Icon: "FishCrappie.png",
		Name: "Crappie",
		Encumbrance: 0.4,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.Crappie",
	},
	{
		Icon: "Crayfish.png",
		Name: "Crayfish",
		Encumbrance: 0.2,
		Hunger: -10,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 30,
		"Burned (mins)": 60,
		"Base ID": "Base.Crayfish",
	},
	{
		Icon: "FishFillet.png",
		Name: "Fish Fillet",
		Encumbrance: 0.2,
		Hunger: -25,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 20,
		"Burned (mins)": 50,
		"Base ID": "Base.FishFillet",
	},
	{
		Icon: "FishRoe.png",
		Name: "Fish Roe",
		Encumbrance: 0.1,
		Hunger: -10,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 14,
		"Rotten (days)": 21,
		"Cooked (mins)": null,
		"Burned (mins)": null,
		"Base ID": "Base.FishRoe",
	},
	{
		Icon: "FishMinnow.png",
		Name: "Little Bait Fish",
		Encumbrance: 0.1,
		Hunger: -5,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.BaitFish",
	},
	{
		Icon: "Lobster.png",
		Name: "Lobster",
		Encumbrance: 0.4,
		Hunger: -40,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 30,
		"Burned (mins)": 60,
		"Base ID": "Base.Lobster",
	},
	{
		Icon: "Oysters.png",
		Name: "Oysters",
		Encumbrance: 0.1,
		Hunger: -5,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 10,
		"Burned (mins)": 25,
		"Base ID": "Base.Oysters",
	},
	{
		Icon: "FishPerch.png",
		Name: "Perch",
		Encumbrance: 0.4,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 30,
		"Burned (mins)": 60,
		"Base ID": "Base.Perch",
	},
	{
		Icon: "FishPike.png",
		Name: "Pike",
		Encumbrance: 0.4,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.Pike",
	},
	{
		Icon: "Salmon.png",
		Name: "Salmon",
		Encumbrance: 0.3,
		Hunger: -30,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 80,
		"Burned (mins)": 130,
		"Base ID": "Base.Salmon",
	},
	{
		Icon: "Shrimp.png",
		Name: "Shrimp",
		Encumbrance: 0.1,
		Hunger: -10,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 10,
		"Burned (mins)": 60,
		"Base ID": "Base.Shrimp",
	},
	{
		Icon: "Squid.png",
		Name: "Squid",
		Encumbrance: 0.2,
		Hunger: -30,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": null,
		"Burned (mins)": null,
		"Base ID": "Base.Squid",
	},
	{
		Icon: "SquidCalamari.png",
		Name: "Squid Calamari",
		Encumbrance: 0.1,
		Hunger: -10,
		Unhappiness: null,
		"Food Sickness": null,
		"Fresh (days)": 2,
		"Rotten (days)": 4,
		"Cooked (mins)": 10,
		"Burned (mins)": 20,
		"Base ID": "Base.SquidCalamari",
	},
	{
		Icon: "FishPanfish.png",
		Name: "Sunfish",
		Encumbrance: 0.4,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.Panfish",
	},
	{
		Icon: "FishTrout.png",
		Name: "Trout",
		Encumbrance: 0.4,
		Hunger: -15,
		Unhappiness: +20,
		"Food Sickness": null,
		"Fresh (days)": 4,
		"Rotten (days)": 8,
		"Cooked (mins)": 20,
		"Burned (mins)": 60,
		"Base ID": "Base.Trout",
	},
];
