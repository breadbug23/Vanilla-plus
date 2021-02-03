const lightning = extend(UnitType, "lightning", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-+-lightning-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-+-lightning-orb", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("vanilla-+-lightning-orb", unit.x, unit.y, (Time.time - 10) * 12);
		Draw.rect("vanilla-+-lightning-orb-outline", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-+-lightning-orb-outline", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("vanilla-+-lightning-orb-outline", unit.x, unit.y, (Time.time - 10) * 12);
	}
});
lightning.constructor = () => extend(UnitEntity, {});
