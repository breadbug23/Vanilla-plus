const zapper = extend(UnitType, "zapper", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("vanilla-plus-zapper-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("vanilla-plus-zapper-orb-outline", unit.x, unit.y, Time.time * 12);
	}
});
zapper.constructor = () => extend(UnitEntity, {});
zapper.defaultController = () => extend(SuicideAI, {});
