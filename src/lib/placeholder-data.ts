const categories = [
    {
        id: "7f0c7f2e-bacd-42b9-9d5d-e528e4f9e08a",
        name: "Masonry & Precast",
        description: "Manic episode without psychotic symptoms, moderate",
        active: false,
    },
    {
        id: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
        name: "Electronics",
        description: "High-quality electronic devices for home and office",
        active: true,
    },
    {
        id: "2c56d857-1b7d-41a2-9aa5-6177ef5a54f3",
        name: "Furniture",
        description: "Modern and comfortable furniture for home and office",
        active: true,
    },
];

const typeRegistrations = [
    {
        id: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        name: "Entrada",
        description: "Primary blast injury of fallopian tube",
        active: false,
    },
    {
        id: "a96be4d2-5ae9-4d55-972e-761bb97d6888",
        name: "Salida",
        description: "Product exit for sale",
        active: true,
    },
    {
        id: "931b3c6e-601a-4c2d-8237-7a5e9cbd4db0",
        name: "Devolución",
        description: "Return of damaged or defective products",
        active: true,
    },
];

const products = [
    {
        id: "1ae80da7-cbf0-47b0-9175-3f63e0d8d5fb",
        name: "Monitor LCD 21 pulgadas",
        description: "Monitor LCD de alta definición, ideal para oficinas.",
        stock: 56,
        retailPrice: 169,
        wholesalePrice: 149,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
    }, // Electronics
    {
        id: "c16b68d7-d3c9-47e3-9e5b-69fd83ab7d3a",
        name: "Silla Ergonomica",
        description: "Silla cómoda para largas jornadas laborales.",
        stock: 100,
        retailPrice: 129,
        wholesalePrice: 109,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "2c56d857-1b7d-41a2-9aa5-6177ef5a54f3",
    }, // Furniture
    {
        id: "f0e9e312-06c7-47a6-a86d-16df51004a95",
        name: "Teclado mecánico",
        description: "Teclado mecánico con iluminación RGB.",
        stock: 150,
        retailPrice: 99,
        wholesalePrice: 89,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
    }, // Electronics
    {
        id: "9e037bdb-5a22-4699-a173-e7439f003cf8",
        name: "Mouse inalámbrico",
        description: "Mouse ergonómico con sensor óptico.",
        stock: 75,
        retailPrice: 49,
        wholesalePrice: 39,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
    }, // Electronics
    {
        id: "4b0cb5a6-69f3-4a11-bff4-d46e7ed5fe7e",
        name: "Escritorio ajustable",
        description: "Escritorio ajustable en altura con acabado de madera.",
        stock: 30,
        retailPrice: 299,
        wholesalePrice: 249,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "2c56d857-1b7d-41a2-9aa5-6177ef5a54f3",
    }, // Furniture
    {
        id: "7b7334d7-b47e-4ad5-9fa9-8c7b15dfffd7",
        name: "Lámpara de escritorio LED",
        description: "Lámpara con luz ajustable para lectura.",
        stock: 80,
        retailPrice: 39,
        wholesalePrice: 29,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "2c56d857-1b7d-41a2-9aa5-6177ef5a54f3",
    }, // Furniture
    {
        id: "940b3c9f-4295-4eb3-b23e-3e197542c09d",
        name: "Audífonos inalámbricos",
        description: "Audífonos con cancelación de ruido y alta fidelidad.",
        stock: 60,
        retailPrice: 199,
        wholesalePrice: 179,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
    }, // Electronics
    {
        id: "029e6f93-04b4-47a1-bb2b-5803d7fb91d4",
        name: "Cámara web 1080p",
        description: "Cámara web con resolución Full HD.",
        stock: 40,
        retailPrice: 89,
        wholesalePrice: 79,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
    }, // Electronics
    {
        id: "c923f515-f620-4ff4-b950-6a16522a3583",
        name: "Impresora multifuncional",
        description: "Impresora con escáner y fotocopiadora.",
        stock: 20,
        retailPrice: 199,
        wholesalePrice: 179,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "b2bfc734-e1db-4d3a-bc68-3b4c7ba0b0a5",
    }, // Electronics
    {
        id: "fcbe19a5-89e6-4b1a-8e09-05aef850c4e6",
        name: "Sofá modular",
        description: "Sofá moderno con diseño modular para espacios pequeños.",
        stock: 25,
        retailPrice: 599,
        wholesalePrice: 549,
        active: true,
        createdBy: "seed",
        updatedBy: "seed",
        categoryId: "2c56d857-1b7d-41a2-9aa5-6177ef5a54f3",
    }, // Furniture
];

const registrations = [
    {
        id: "307b1714-d171-422f-a2a2-220f2ba5af38",
        description: "Entrada de 10 unidades de Monitor LCD 21 pulgadas",
        quantity: 10,
        active: true,
        typeRegistrationId: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        productId: "1ae80da7-cbf0-47b0-9175-3f63e0d8d5fb",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "e4ae1bbd-7d25-4052-8040-bae170a9265f",
        description: "Salida de 5 unidades de Silla Ergonomica",
        quantity: 5,
        active: true,
        typeRegistrationId: "a96be4d2-5ae9-4d55-972e-761bb97d6888",
        productId: "c16b68d7-d3c9-47e3-9e5b-69fd83ab7d3a",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "5d23297c-c688-4f24-bc0f-ffbff1550e20",
        description: "Entrada de 20 unidades de Teclado mecánico",
        quantity: 20,
        active: true,
        typeRegistrationId: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        productId: "f0e9e312-06c7-47a6-a86d-16df51004a95",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "0cf50938-8976-4981-b1e7-f12c47087df3",
        description: "Entrada de 15 unidades de Mouse inalámbrico",
        quantity: 15,
        active: true,
        typeRegistrationId: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        productId: "9e037bdb-5a22-4699-a173-e7439f003cf8",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "4a4c2f4a-dc45-4cb3-a3aa-2c8f1b1f6c45",
        description: "Salida de 5 unidades de Escritorio ajustable",
        quantity: 5,
        active: true,
        typeRegistrationId: "a96be4d2-5ae9-4d55-972e-761bb97d6888",
        productId: "4b0cb5a6-69f3-4a11-bff4-d46e7ed5fe7e",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "b5d0c611-d04e-4c6f-9b1f-8f3eb0016f82",
        description: "Entrada de 8 unidades de Lámpara de escritorio LED",
        quantity: 8,
        active: true,
        typeRegistrationId: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        productId: "7b7334d7-b47e-4ad5-9fa9-8c7b15dfffd7",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "ea6c3b9d-1d65-4b63-826e-30138b128d62",
        description: "Salida de 3 unidades de Audífonos inalámbricos",
        quantity: 3,
        active: true,
        typeRegistrationId: "a96be4d2-5ae9-4d55-972e-761bb97d6888",
        productId: "940b3c9f-4295-4eb3-b23e-3e197542c09d",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "b9636fc1-6f65-4900-8c40-10693d1c52d4",
        description: "Entrada de 7 unidades de Cámara web 1080p",
        quantity: 7,
        active: true,
        typeRegistrationId: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        productId: "029e6f93-04b4-47a1-bb2b-5803d7fb91d4",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "7d346640-2e8b-4db2-83fe-d6a97d8e3a7e",
        description: "Salida de 2 unidades de Impresora multifuncional",
        quantity: 2,
        active: true,
        typeRegistrationId: "a96be4d2-5ae9-4d55-972e-761bb97d6888",
        productId: "c923f515-f620-4ff4-b950-6a16522a3583",
        createdBy: "seed",
        updatedBy: "seed",
    },
    {
        id: "8aeef771-d60e-4ef0-a878-d618e25648c1",
        description: "Entrada de 4 unidades de Sofá modular",
        quantity: 4,
        active: true,
        typeRegistrationId: "d9d12436-ebe1-4c2b-9c8e-7d0973834a1e",
        productId: "fcbe19a5-89e6-4b1a-8e09-05aef850c4e6",
        createdBy: "seed",
        updatedBy: "seed",
    },
];

export { categories, typeRegistrations, products, registrations };
