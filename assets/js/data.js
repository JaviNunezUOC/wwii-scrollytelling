/* DATA.JS — Segunda Guerra Mundial */

const DATA = {
  meta: { title: "Segunda Guerra Mundial", period: "1939 — 1945", theme: "wwii", author: "TFG UOC 2025" },

  /* ── CRONOLOGÍA ── */

  timeline: [
    { year: "Sep 1939", title: "Invasión de Polonia",
      desc: "Alemania invade Polonia el 1 de septiembre con 1,5 millones de soldados. Francia y Reino Unido declaran la guerra dos días después. El 17 de septiembre la URSS invade Polonia por el este en virtud del Pacto Molotov-Ribbentrop. Polonia cae en 35 días.",
      category: "axis" },
    { year: "Nov 1939 – Mar 1940", title: "Guerra de Invierno",
      desc: "La URSS ataca Finlandia. La pequeña nación resiste durante más de tres meses gracias a la 'táctica Motti'. Finlandia cede el 11% de su territorio pero conserva su independencia. Stalin es expulsado de la Sociedad de Naciones.",
      category: "neutral" },
    { year: "Abr–Jun 1940", title: "Ofensiva alemana en el oeste",
      desc: "Alemania ocupa Dinamarca y Noruega en abril. En mayo ataca Francia y los Países Bajos. La Blitzkrieg atraviesa las Ardenas, consideradas intransitables. La Operación Dynamo evacúa 338.000 soldados aliados desde Dunkerque.",
      category: "axis" },
    { year: "Jun 1940", title: "Caída de Francia",
      desc: "Francia firma el armisticio el 22 de junio en el mismo vagón de tren donde Alemania se había rendido en 1918 — una humillación simbólica calculada por Hitler. El mariscal Pétain gobierna la Francia de Vichy. De Gaulle llama a la resistencia desde Londres.",
      category: "axis" },
    { year: "Jul–Oct 1940", title: "Batalla de Gran Bretaña",
      desc: "La Luftwaffe lanza el Blitz para destruir la RAF y posibilitar la invasión. Durante 57 noches consecutivas bombardea Londres. Los pilotos británicos resisten. Churchill: 'Nunca tantos debieron tanto a tan pocos.' Hitler cancela la Operación León Marino.",
      category: "ally" },
    { year: "Jun 1941", title: "Operación Barbarroja",
      desc: "El 22 de junio, 3,8 millones de soldados del Eje invaden la URSS en el mayor ataque de la historia. Stalin, sorprendido pese a múltiples avisos, pierde 3 millones de prisioneros en los primeros meses. El invierno ruso frena el avance ante Moscú en diciembre.",
      category: "axis" },
    { year: "Dic 1941", title: "Pearl Harbor y la globalización del conflicto",
      desc: "El 7 de diciembre, 350 aviones japoneses atacan Pearl Harbor. 2.403 americanos muertos, 8 acorazados hundidos o dañados. EE.UU. declara la guerra a Japón. Hitler declara la guerra a EE.UU. el 11 de diciembre. El conflicto europeo se convierte en guerra mundial.",
      category: "axis" },
    { year: "Jun 1942", title: "Batalla de Midway",
      desc: "EE.UU. descifra los códigos japoneses y tiende una emboscada a la flota de Yamamoto. Hunden cuatro portaaviones japoneses en tres días perdiendo solo uno. Es el punto de inflexión en el Pacífico: Japón nunca recuperará la iniciativa estratégica.",
      category: "ally" },
    { year: "Oct–Nov 1942", title: "El Alamein y el vuelco en África",
      desc: "El general Montgomery derrota a Rommel en la segunda batalla de El Alamein. Simultáneamente, el desembarco aliado en Marruecos y Argelia (Operación Torch) atrapa al Eje en una tenaza. En mayo de 1943 capitularán 275.000 soldados del Eje en Túnez.",
      category: "ally" },
    { year: "Feb 1943", title: "Rendición en Stalingrado",
      desc: "El 2 de febrero, el Mariscal Paulus rinde el VI Ejército alemán en Stalingrado. 300.000 soldados muertos, heridos o capturados. Es la primera gran derrota del ejército alemán y el punto de inflexión definitivo del frente oriental. El mito de la invencibilidad nazi se rompe.",
      category: "ally" },
    { year: "Jul 1943", title: "Kursk y el fin de la iniciativa alemana",
      desc: "La batalla de Kursk (5-23 julio) fue el mayor combate de tanques de la historia: 6.000 blindados, 4.000 aviones y 2 millones de soldados. La ofensiva alemana Ciudadela fracasa. A partir de este momento el Ejército Rojo nunca cederá la iniciativa estratégica.",
      category: "ally" },
    { year: "Jun 1944", title: "Día D — Normandía",
      desc: "El 6 de junio, 5.000 barcos, 13.000 aviones y 156.000 soldados ejecutan el mayor desembarco anfibio de la historia. Las cinco playas —Utah, Omaha, Gold, Juno, Sword— son tomadas al precio de miles de bajas aliadas. El segundo frente que Stalin llevaba años reclamando se abre por fin.",
      category: "ally" },
    { year: "Ago 1944", title: "Liberación de París y avance aliado",
      desc: "El 25 de agosto, la 2.ª División Blindada francesa y las fuerzas aliadas liberan París. De Gaulle encabeza el desfile por los Campos Elíseos. En el este, el Ejército Rojo libera Rumanía, Bulgaria y los países bálticos. El Reich se encoge por ambos flancos.",
      category: "ally" },
    { year: "Dic 1944", title: "Batalla de las Ardenas",
      desc: "La última gran ofensiva alemana en el oeste: 250.000 soldados intentan romper las líneas aliadas en Bélgica. La resistencia de Bastogne —'¡Tuercas!'— y el deshielo frenan el avance. Alemania agota sus últimas reservas. Hitler está definitivamente a la defensiva.",
      category: "neutral" },
    { year: "Ene 1945", title: "Liberación de Auschwitz",
      desc: "El 27 de enero, el Ejército Rojo libera el campo de Auschwitz-Birkenau. Los soldados soviéticos encuentran 7.000 prisioneros sobrevivientes, almacenes con el pelo, zapatos y maletas de millones de víctimas. El mundo ve por primera vez la escala del Holocausto.",
      category: "ally" },
    { year: "Feb 1945", title: "Conferencia de Yalta",
      desc: "Stalin, Roosevelt y Churchill acuerdan en Yalta la reorganización de Europa tras la guerra. La URSS se compromete a entrar en la guerra contra Japón. Se sientan las bases de la división de Europa en esferas de influencia que definirá la Guerra Fría.",
      category: "neutral" },
    { year: "May 1945", title: "Rendición de Alemania — VE Day",
      desc: "El 30 de abril Hitler se suicida en su búnker mientras el Ejército Rojo combate a 500 metros. El 8 de mayo Alemania firma la rendición incondicional en Berlín. Europa celebra el Día de la Victoria. 70 millones de muertos y el continente en ruinas.",
      category: "ally" },
    { year: "Ago–Sep 1945", title: "Fin de la guerra — VJ Day",
      desc: "El 6 de agosto, la bomba 'Little Boy' destruye Hiroshima. El 9, 'Fat Man' cae sobre Nagasaki. Entre 150.000 y 226.000 muertos inmediatos. El 15 de agosto el Emperador Hirohito anuncia la rendición en radio. El 2 de septiembre se firma el fin oficial a bordo del USS Missouri.",
      category: "ally" }
  ],

  /* ── MAPA ── */

  mapMarkers: [
    { lat: 52.2,  lng: 21.0,   name: "Varsovia",    year: "1939",    desc: "Primera capital europea ocupada. El gueto de Varsovia albergó 460.000 personas en 3,3 km². Levantamiento del gueto en 1943.", type: "axis",   layer: "europe"  },
    { lat: 48.8,  lng: 2.35,   name: "París",       year: "1940/44", desc: "Ocupada en junio de 1940 sin resistencia. Liberada el 25 de agosto de 1944. La resistencia francesa actuó durante toda la ocupación.", type: "axis",   layer: "europe"  },
    { lat: 51.5,  lng: -0.12,  name: "Londres",     year: "1940-41", desc: "El Blitz alemán bombardeó la ciudad 57 noches consecutivas. 43.000 civiles muertos en todo el Reino Unido. La RAF resistió en los cielos.", type: "ally",   layer: "europe"  },
    { lat: 48.6,  lng: -1.5,   name: "Normandía",   year: "1944",    desc: "Día D, 6 de junio de 1944. El mayor desembarco anfibio de la historia. 156.000 soldados el primer día. Más de 4.000 bajas aliadas solo en Omaha Beach.", type: "battle", layer: "europe"  },
    { lat: 48.9,  lng: 44.5,   name: "Stalingrado", year: "1942-43", desc: "La batalla más sangrienta: 2 millones de bajas totales. Combates calle a calle durante 5 meses. La rendición del VI Ejército alemán el 2 febrero 1943 fue el punto de inflexión.", type: "battle", layer: "europe"  },
    { lat: 52.5,  lng: 13.4,   name: "Berlín",      year: "1945",    desc: "Tomada por el Ejército Rojo en abril-mayo 1945. 80.000 soldados soviéticos muertos en el asalto final. Hitler se suicida el 30 de abril. Alemania se rinde el 8 de mayo.", type: "ally",   layer: "europe"  },
    { lat: 50.0,  lng: 20.0,   name: "Auschwitz",   year: "1940-45", desc: "Mayor campo de exterminio nazi. Entre 1,1 y 1,5 millones de víctimas, mayoritariamente judíos. Liberado por el Ejército Rojo el 27 enero 1945.", type: "axis",   layer: "europe"  },
    { lat: 50.4,  lng: 30.5,   name: "Kiev",        year: "1941",    desc: "Capturada en septiembre de 1941 tras una de las mayores batallas de cerco de la historia. Los alemanes hicieron 665.000 prisioneros.", type: "axis",   layer: "europe"  },
    { lat: 51.7,  lng: 36.2,   name: "Kursk",       year: "1943",    desc: "Mayor batalla de tanques de la historia (julio 1943). 6.000 blindados, 4.000 aviones. La ofensiva alemana fracasa. El Ejército Rojo toma la iniciativa definitivamente.", type: "battle", layer: "europe"  },
    { lat: 21.3,  lng: -157.8, name: "Pearl Harbor", year: "1941",   desc: "Ataque japonés del 7 de diciembre. 350 aviones en dos oleadas. 2.403 americanos muertos, 8 acorazados hundidos o dañados. EE.UU. declara la guerra al día siguiente.", type: "axis",   layer: "pacific" },
    { lat: 31.4,  lng: 179.5,  name: "Midway",      year: "1942",    desc: "4-7 junio 1942. EE.UU. hunde cuatro portaaviones japoneses perdiendo solo uno. El punto de inflexión en el Pacífico. Japón no recuperará la iniciativa.", type: "battle", layer: "pacific" },
    { lat: 34.4,  lng: 132.5,  name: "Hiroshima",   year: "1945",    desc: "6 de agosto de 1945. 'Little Boy': primera bomba atómica en combate. Entre 70.000 y 80.000 muertos inmediatos. La ciudad fue destruida en segundos.", type: "battle", layer: "pacific" },
    { lat: 32.7,  lng: 129.9,  name: "Nagasaki",    year: "1945",    desc: "9 de agosto de 1945. 'Fat Man': segunda bomba atómica. Unos 40.000 muertos inmediatos. El 15 de agosto Japón anuncia su rendición.", type: "battle", layer: "pacific" },
    { lat: 26.3,  lng: 127.8,  name: "Okinawa",     year: "1945",    desc: "La última gran batalla del Pacífico (abril-junio 1945). 12.000 americanos y más de 100.000 japoneses muertos. Los kamikazes causaron el 80% de las bajas navales americanas.", type: "battle", layer: "pacific" },
    { lat: 30.9,  lng: 29.9,   name: "El Alamein",  year: "1942",    desc: "Victoria aliada decisiva en el norte de África (oct-nov 1942). Montgomery derrota a Rommel. Churchill: 'Antes de El Alamein no ganamos nada. Después, no perdimos nada.'", type: "battle", layer: "africa"  },
    { lat: 37.0,  lng: 10.2,   name: "Túnez",       year: "1943",    desc: "Mayo 1943: capitulación del Eje en África del Norte. 275.000 prisioneros alemanes e italianos. El continente africano queda despejado para el desembarco en Sicilia.", type: "ally",   layer: "africa"  }
  ],

  /* ── PERSONAJES ── */

  people: [
    {
      name: "Winston Churchill", role: "Primer Ministro, Reino Unido", years: "1874 — 1965", side: "ally",
      foto: "assets/images/churchill.jpg",
      bio: "Nombrado Primer Ministro el 10 de mayo de 1940, el mismo día del ataque alemán a Francia. Se negó a negociar la paz cuando era la opción más racional. Sus discursos radiofónicos — «We shall fight on the beaches», «This was their finest hour» — sostuvieron la moral británica durante los años más oscuros. Premio Nobel de Literatura en 1953. Considerado el mayor líder del siglo XX."
    },
    {
      name: "Franklin D. Roosevelt", role: "Presidente, Estados Unidos", years: "1882 — 1945", side: "ally",
      foto: "assets/images/roosevelt.jpg",
      bio: "Reelegido cuatro veces, guió a EE.UU. desde el aislacionismo hasta convertirse en el 'arsenal de la democracia'. El programa Préstamo y Arriendo envió 50.000 millones de dólares en material bélico a los aliados antes de que EE.UU. entrara en guerra. Murió el 12 de abril de 1945, a solo 25 días de la victoria en Europa, sin verla."
    },
    {
      name: "Iósif Stalin", role: "Secretario General, URSS", years: "1878 — 1953", side: "ally",
      foto: "assets/images/stalin.jpg",
      bio: "Sorprendido por Barbarroja pese a los avisos del espionaje, tardó días en reaccionar. Pero logró trasladar 1.500 fábricas al interior del país antes de que los alemanes las capturaran. La URSS perdió 27 millones de personas — más que todos los demás países juntos. El Ejército Rojo fue la fuerza que derrotó a la Wehrmacht en términos absolutos."
    },
    {
      name: "Charles de Gaulle", role: "Líder de la Francia Libre", years: "1890 — 1970", side: "ally",
      foto: "assets/images/degaulle.jpg",
      bio: "El 18 de junio de 1940, dos días después de la petición de armisticio de Pétain, De Gaulle emitió desde la BBC de Londres su llamada a la resistencia. Casi nadie le escuchó entonces. Pero su apuesta por seguir luchando, cuando toda lógica aconsejaba rendirse, hizo posible que Francia recuperara su honor. Fue presidente de la V República hasta 1969."
    },
    {
      name: "Dwight Eisenhower", role: "Comandante Supremo Aliado", years: "1890 — 1969", side: "ally",
      foto: "assets/images/eisenhower.jpg",
      bio: "Nunca había mandado tropas en combate antes de la guerra, pero demostró un talento extraordinario para la gestión de coaliciones. Coordinó el Desembarco de Normandía, una operación de una complejidad logística sin precedentes. Su mayor reto no fueron los alemanes sino los generales aliados: Patton, Montgomery y De Gaulle. Fue el 34.º presidente de EE.UU. (1953-1961)."
    },
    {
      name: "Adolf Hitler", role: "Führer, Alemania", years: "1889 — 1945", side: "axis",
      foto: "assets/images/hitler.jpg",
      bio: "Arquitecto del mayor genocidio de la historia y responsable de una guerra que mató a 70 millones de personas. Sus errores estratégicos — atacar la URSS antes de vencer a Gran Bretaña, declarar la guerra a EE.UU. tras Pearl Harbor, negarse a autorizar retiradas en el frente oriental — aceleraron la derrota alemana. Se suicidó el 30 de abril de 1945 en su búnker bajo la Cancillería."
    },
    {
      name: "Benito Mussolini", role: "Il Duce, Italia", years: "1883 — 1945", side: "axis",
      foto: "assets/images/mussolini.jpg",
      bio: "Fundador del fascismo e inspiración del nazismo, entró en la guerra en junio de 1940 creyendo que duraría semanas. Las derrotas italianas en Grecia, África del Norte y el propio suelo italiano lo desacreditaron. Fue depuesto por el Gran Consejo Fascista el 25 de julio de 1943 y rescatado por los alemanes. Ejecutado por partisanos el 28 de abril de 1945, su cadáver fue colgado boca abajo en Milán."
    },
    {
      name: "Erwin Rommel", role: "Feldmariscal — El Zorro del Desierto", years: "1891 — 1944", side: "axis",
      foto: "assets/images/rommel.jpg",
      bio: "El más admirado de los generales alemanes, incluso por sus enemigos. Churchill le rindió homenaje en el Parlamento en plena guerra. En África del Norte llevó a un ejército pequeño y mal abastecido hasta las puertas de Egipto. En 1944 fue destinado a defender Normandía. Involucrado en el complot del 20 de julio contra Hitler, fue obligado a suicidarse con una cápsula de cianuro el 14 de octubre de 1944."
    }
  ],

  /* ── GALERÍA ── */
  
  gallery: [
    { src: "assets/images/galeria-1.jpg",  caption: "Desembarco de Normandía — Día D, 6 junio 1944" },
    { src: "assets/images/galeria-2.jpg",  caption: "Izando la bandera en Iwo Jima, febrero 1945" },
    { src: "assets/images/galeria-3.jpg",  caption: "Soldados esperando evacuación en Dunkerque, 1940" },
    { src: "assets/images/galeria-4.jpg",  caption: "Infantería alemana avanzando en Francia, mayo 1940" },
    { src: "assets/images/galeria-5.jpg",  caption: "Los Tres Grandes en la Conferencia de Teherán, 1943" },
    { src: "assets/images/galeria-6.jpg",  caption: "Combate urbano en las ruinas de Stalingrado, invierno 1942-43" },
    { src: "assets/images/galeria-7.jpg",  caption: "Hiroshima tras la bomba atómica, agosto 1945" },
    { src: "assets/images/galeria-8.jpg",  caption: "Aviación de combate — Batalla de Gran Bretaña, 1940" },
    { src: "assets/images/galeria-9.jpg",  caption: "Caballería polaca durante la invasión alemana, septiembre 1939" },
    { src: "assets/images/galeria-10.jpg", caption: "Liberación de París, agosto 1944" },
    { src: "assets/images/galeria-11.jpg", caption: "Tanques de la Wehrmacht en la invasión de Polonia, 1939" },
    { src: "assets/images/galeria-12.jpg", caption: "Columnas motorizadas en el frente oriental, verano 1941" }
  ]
};
