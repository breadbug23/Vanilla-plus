const taser = extend(UnitType, "taser", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-plus-taser-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-plus-taser-orb-outline", unit.x, unit.y, Time.time * 12);
	}
});
taser.constructor = () => extend(UnitEntity, {});
