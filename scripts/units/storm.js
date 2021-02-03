const storm = extend(UnitType, "storm", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-plus-storm-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-plus-storm-orb", unit.x, unit.y, (Time.time + 6) * 12);
		Draw.rect("vanilla-plus-storm-orb", unit.x, unit.y, (Time.time - 6) * 12);
		Draw.rect("vanilla-plus-storm-orb", unit.x, unit.y, (Time.time + 12) * 12);
		Draw.rect("vanilla-plus-storm-orb", unit.x, unit.y, (Time.time - 12) * 12);
		Draw.rect("vanilla-plus-storm-orb-outline", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-plus-storm-orb-outline", unit.x, unit.y, (Time.time + 6) * 12);
		Draw.rect("vanilla-plus-storm-orb-outline", unit.x, unit.y, (Time.time - 6) * 12);
		Draw.rect("vanilla-plus-storm-orb-outline", unit.x, unit.y, (Time.time + 12) * 12);
		Draw.rect("vanilla-plus-storm-orb-outline", unit.x, unit.y, (Time.time - 12) * 12);
	}
});
storm.constructor = () => extend(UnitEntity, {});
