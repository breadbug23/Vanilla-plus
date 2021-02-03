const thunder = extend(UnitType, "thunder", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-+-thunder-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-+-thunder-orb", unit.x, unit.y, (Time.time + 3.75) * 12);
		Draw.rect("vanilla-+-thunder-orb-outline", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-+-thunder-orb-outline", unit.x, unit.y, (Time.time + 3.75) * 12);
	}
});
thunder.constructor = () => extend(UnitEntity, {});
