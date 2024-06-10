const itemsList = [
    {
        id: 1,
        category: "CPU",
        description: "Procesador de alto rendimiento con 6 núcleos de rendimiento y 8 núcleos de eficiencia, ideal para juegos y aplicaciones exigentes.",
        img: "https://cyccomputer.pe/50696-large_default/procesador-intel-core-i5-14600k-350ghz530ghz-24mb-14-core-lga1700-pnbx8071514600k.jpg",
        name: "PROCESADOR INTEL I5-14600K",
        price: 1500,
        stock: 5
    },
    {
        id: 2,
        category: "CPU",
        description: "Procesador avanzado con 8 núcleos de rendimiento y 8 núcleos de eficiencia, ofreciendo un equilibrio perfecto para multitarea y juegos.",
        img: "https://cyccomputer.pe/50694-large_default/procesador-intel-core-i7-14700k-34g0hz560ghz-33mb-20-core-lga1700-pnbx8071514700k.jpg",
        name: "PROCESADOR INTEL I7-14700K",
        price: 2000,
        stock: 5
    },
    {
        id: 3,
        category: "GPU",
        description: "Tarjeta gráfica potente para juegos en 4K y aplicaciones de creación de contenido.",
        img: "https://cyccomputer.pe/55376-large_default/gigabyte-geforce-rtx-3060-12gb-gddr6-192bits-vision-oc-pngv-n3060vision-oc-12gd.jpg",
        name: "NVIDIA RTX 3080",
        price: 8000,
        stock: 10
    },
    {
        id: 4,
        category: "GPU",
        description: "Tarjeta gráfica de última generación, excelente para juegos de alta definición y aplicaciones gráficas intensivas.",
        img: "https://cyccomputer.pe/54382-large_default/asus-geforce-rtx-3060-12gb-gddr6-192bits-dual-oc-white-pn90yv0gb9-m0a00.jpg",
        name: "NVIDIA RTX 3090",
        price: 12000,
        stock: 7
    },
    {
        id: 5,
        category: "Teclado",
        description: "Teclado mecánico con retroiluminación RGB, perfecto para juegos y programación.",
        img: "https://cdn.memorykings.pe/files/2020/02/25/325996-MK026591A.jpg",
        name: "TECLADO MECÁNICO LOGITECH G513",
        price: 200,
        stock: 15
    },
    {
        id: 6,
        category: "Teclado",
        description: "Teclado inalámbrico ergonómico, ideal para largas sesiones de trabajo.",
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/23-109-349-03.jpg",
        name: "TECLADO ERGONÓMICO MICROSOFT SCULPT",
        price: 180,
        stock: 20
    },
    {
        id: 7,
        category: "Mouse",
        description: "Ratón gamer con sensor de alta precisión y múltiples botones programables.",
        img: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/376/67091/full_image.jpeg",
        name: "RATÓN GAMER RAZER DEATHADDER ELITE",
        price: 100,
        stock: 25
    },
    {
        id: 8,
        category: "Mouse",
        description: "Ratón ergonómico inalámbrico con larga duración de batería, perfecto para oficina.",
        img: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1 2x, https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1 1x",
        name: "RATÓN ERGONÓMICO LOGITECH MX MASTER 3",
        price: 150,
        stock: 30
    },
    {
        id: 9,
        category: "Motherboard",
        description: "Placa base de alto rendimiento compatible con los procesadores Intel de última generación.",
        img: "https://cyccomputer.pe/54370-medium_default/placa-asus-rog-maximus-z790-hero-ddr5-lga-1700-pn90mb1ci0-m1aay0.jpg",
        name: "MOTHERBOARD ASUS ROG STRIX Z790-E",
        price: 500,
        stock: 12
    },
    {
        id: 10,
        category: "Motherboard",
        description: "Placa base confiable y duradera, perfecta para configuraciones de PC personalizadas.",
        img: "https://cyccomputer.pe/54390-medium_default/placa-aorus-z790-elite-ax-ice-ddr5-lga-1700.jpg",
        name: "MOTHERBOARD GIGABYTE Z790 AORUS ULTRA",
        price: 450,
        stock: 10
    }
]

export const getItems = (categoryId) => {
    const result = categoryId ? itemsList.filter(item => item.category == categoryId) : itemsList

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result.length > 0 ?
                resolve(result)
                :
                reject('No hay data')
        }, 500)
    })
}

export const getItemById = (itemId) => {
    const result = itemsList.find(p => p.id == itemId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result ?
                resolve(result)
                :
                reject('No hay data')
        }, 500)
    })
}