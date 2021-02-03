const lightning = extend(UnitType, "lightning", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-plus-lightning-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-plus-lightning-orb", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("vanilla-plus-lightning-orb", unit.x, unit.y, (Time.time - 10) * 12);
		Draw.rect("vanilla-plus-lightning-orb-outline", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-plus-lightning-orb-outline", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("vanilla-plus-lightning-orb-outline", unit.x, unit.y, (Time.time - 10) * 12);
	}
});
lightning.constructor = () => extend(UnitEntity, {});
