    const serviciosPorCategoria = {
        uñas: [
            "Esc. + Gel ($430 - $630)",
            "Esc. B.B ($530 - $730)"
        ],
        gelish: [
            "Gel en manos o pies ($200)",
            "Manicure + Gel ($350)",
            "Gel Niñas (8 años) ($120)",
            "Rubber ($250)",
            "Rubber + Gel ($350)",
            "Rubber Retoque ($200)"
        ],
        diseños: [
            "Francesa/Cristales ($50)",
            "Mano Alzada ($15)",
            "Uña Diseñada ($50)",
            "Limpieza de Cutícula ($100)",
            "Efecto Matte ($50)",
            "Esmaltado Reg. Niñas ($80)"
        ],
        maniPedi: [
            "Pedicura Regular ($380)",
            "Pedicura c/Gel ($450)",
            "Pedicura Royal ($400)",
            "Manicure Básico ($250)"
        ],
        retiros: [
            "Retiro de Gel ($50)",
            "Retiro de Rubber ($100)",
            "Retiro de Acrílico ($150)",
            "Retiro Acrílico p/Uña ($30)"
        ],
        especiales: [
            "Baño Acrílico + Gel ($400)",
            "Reposición p/Uña ($70)",
            "Cambio de Forma ($50)",
            "Baño Acrílico + Mini Ext. ($400)",
            "Baño Acrílico Uña Larga ($470)"
        ]
    };

    const categoriaSelect = document.getElementById("categoriaServicio");
    const servicioSelect = document.getElementById("servicioEspecifico");

    categoriaSelect.addEventListener("change", function() {
        const categoria = this.value;
        servicioSelect.innerHTML = "<option value=''>Selecciona un servicio</option>";

        if (categoria && serviciosPorCategoria[categoria]) {
            serviciosPorCategoria[categoria].forEach(servicio => {
                const option = document.createElement("option");
                option.value = servicio;
                option.textContent = servicio;
                servicioSelect.appendChild(option);
            });
        }
    });
