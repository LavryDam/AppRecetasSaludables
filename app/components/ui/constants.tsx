const RECIPES = [
  {
    id: 1,
    name: "Ensalada Griega",
    description:
      "Ensalada fresca con tomate, pepino, cebolla, queso feta y aceitunas.",
    categories: ["Comida", "Cena", "Vegetariano"],
    instructions:
      "Corta los vegetales en trozos. Mezcla con queso feta y aceitunas. Añade aceite de oliva y orégano.",
    ingredients: [
      "2 tomates",
      "1 pepino",
      "1 cebolla",
      "100 g de queso feta",
      "10 aceitunas",
      "2 cucharadas de aceite de oliva",
      "1 pizca de orégano",
    ],
  },
  {
    id: 2,
    name: "Salmón al Vapor",
    description: "Salmón cocido al vapor con limón y hierbas.",
    categories: ["Comida", "Cena"],
    instructions:
      "Coloca el salmón en una vaporera. Añade rodajas de limón y hierbas frescas. Cocina al vapor por 10-12 minutos.",
    ingredients: [
      "2 filetes de salmón",
      "1 limón (en rodajas)",
      "1 ramita de hierbas frescas (como eneldo o perejil)",
    ],
  },
  {
    id: 3,
    name: "Tacos de Lechuga",
    description:
      "Tacos ligeros hechos con hojas de lechuga en lugar de tortillas.",
    categories: ["Cena"],
    instructions:
      "Llena hojas de lechuga con pollo desmenuzado, aguacate y salsa. Sirve inmediatamente.",
    ingredients: [
      "8 hojas de lechuga",
      "200 g de pollo desmenuzado",
      "1 aguacate (en trozos)",
      "4 cucharadas de salsa (como pico de gallo o guacamole)",
    ],
  },
  {
    id: 4,
    name: "Quinoa con Verduras",
    description: "Quinoa cocida con un salteado de verduras frescas.",
    categories: ["Comida", "Cena", "Vegano"],
    instructions:
      "Cocina la quinoa según las instrucciones. Saltea verduras y mézclalas con la quinoa.",
    ingredients: [
      "150 g de quinoa",
      "200 g de verduras frescas (como zanahoria, calabacín y pimientos)",
      "2 cucharadas de aceite para saltear",
    ],
  },
  {
    id: 5,
    name: "Hummus con Palitos de Verdura",
    description: "Dip de garbanzos acompañado de zanahorias, apio y pepino.",
    categories: ["Desayuno/Merienda", "Comida", "Vegano"],
    instructions:
      "Tritura garbanzos cocidos con ajo, tahini y limón. Sirve con bastones de verdura.",
    ingredients: [
      "250 g de garbanzos cocidos",
      "1 diente de ajo",
      "2 cucharadas de tahini",
      "1 limón (zumo)",
      "2 zanahorias",
      "2 ramas de apio",
      "1 pepino",
    ],
  },
  {
    id: 6,
    name: "Pollo a la Parrilla",
    description: "Pechuga de pollo marinada y cocinada a la parrilla.",
    categories: ["Comida", "Cena"],
    instructions:
      "Marina el pollo con especias y aceite. Cocina a la parrilla hasta que esté dorado.",
    ingredients: [
      "2 pechugas de pollo",
      "1 cucharada de especias (como paprika o comino)",
      "2 cucharadas de aceite",
    ],
  },
  {
    id: 7,
    name: "Sopa de Miso",
    description: "Sopa japonesa ligera con miso, tofu y algas.",
    categories: ["Comida", "Cena", "Vegetariano"],
    instructions:
      "Calienta agua con pasta de miso. Añade tofu y algas. Cocina a fuego bajo por 5 minutos.",
    ingredients: [
      "1 litro de agua",
      "3 cucharadas de pasta de miso",
      "100 g de tofu (en cubos)",
      "10 g de algas (como wakame)",
    ],
  },
  {
    id: 8,
    name: "Batido Verde",
    description: "Bebida saludable de espinaca, plátano y leche de almendra.",
    categories: ["Desayuno/Merienda"],
    instructions:
      "Licúa espinaca, plátano, leche de almendra y hielo. Sirve frío.",
    ingredients: [
      "1 taza de espinaca",
      "1 plátano",
      "200 ml de leche de almendra",
      "1 taza de hielo",
    ],
  },
  {
    id: 9,
    name: "Arroz Integral con Brócoli",
    description: "Arroz integral acompañado de brócoli al vapor.",
    categories: ["Comida", "Cena", "Vegetariano"],
    instructions:
      "Cocina el arroz integral. Cocina el brócoli al vapor y mezcla con el arroz.",
    ingredients: ["150 g de arroz integral", "200 g de brócoli"],
  },
  {
    id: 10,
    name: "Wrap de Pavo",
    description: "Wrap ligero con pavo, espinaca y aguacate.",
    categories: ["Comida", "Cena"],
    instructions:
      "Coloca pavo, espinaca y aguacate en una tortilla integral. Enrolla y sirve.",
    ingredients: [
      "2 tortillas integrales",
      "100 g de pavo en lonchas",
      "1 taza de espinaca",
      "1 aguacate (en rodajas)",
    ],
  },
  {
    id: 11,
    name: "Yogur con Frutas",
    description: "Postre rápido con yogur natural y frutas frescas.",
    categories: ["Desayuno/Merienda", "Vegetariano"],
    instructions:
      "Coloca yogur en un bol. Añade trozos de frutas frescas como fresas, kiwi y plátano.",
    ingredients: [
      "200 g de yogur natural",
      "50 g de fresas",
      "1 kiwi",
      "1 plátano",
    ],
  },
  {
    id: 12,
    name: "Galletas de Avena",
    description: "Galletas saludables hechas con avena y plátano.",
    categories: ["Desayuno/Merienda", "Vegetariano", "Vegano"],
    instructions:
      "Mezcla avena con plátano machacado. Forma galletas y hornéalas a 180°C durante 15 minutos.",
    ingredients: ["200 g de avena", "2 plátanos maduros"],
  },
  {
    id: 13,
    name: "Brownie de Batata",
    description: "Brownie saludable hecho con batata y cacao en polvo.",
    categories: ["Comida", "Cena", "Vegetariano"],
    instructions:
      "Tritura batata cocida, cacao en polvo y un poco de miel. Hornea a 180°C durante 20 minutos.",
    ingredients: [
      "300 g de batata cocida",
      "3 cucharadas de cacao en polvo",
      "2 cucharadas de miel",
    ],
  },
  {
    id: 14,
    name: "Helado de Plátano",
    description: "Helado casero de plátano congelado y leche de almendra.",
    categories: ["Desayuno/Merienda", "Vegetariano", "Vegano"],
    instructions:
      "Congela trozos de plátano. Licúalos con un poco de leche de almendra hasta obtener una textura cremosa.",
    ingredients: ["2 plátanos congelados", "100 ml de leche de almendra"],
  },
  {
    id: 15,
    name: "Manzanas Asadas",
    description: "Postre ligero de manzanas al horno con canela.",
    categories: ["Cena", "Desayuno/Merienda"],
    instructions:
      "Corta las manzanas por la mitad. Espolvorea canela y hornéalas a 180°C durante 25 minutos.",
    ingredients: ["4 manzanas", "1 cucharadita de canela"],
  },
];

export default RECIPES;
