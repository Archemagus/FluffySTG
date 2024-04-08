/obj/structure/window/fulltile/colony_fabricator/airbaged/Initialize(mapload, direct)
	. = ..()
	qdel(GetComponent(/datum/component/simple_rotation))
	AddElement(/datum/element/airbag)

/obj/effect/spawner/structure/window/colony_fabricator
	name = "prefabricated window spawner"
	icon = 'tff_modular/modules/mapping_colony_windows/icons/structures_spawners.dmi'
	icon_state = "colonywindow_spawner"
	spawn_list = list(/obj/structure/grille, /obj/structure/window/fulltile/colony_fabricator/airbaged)
