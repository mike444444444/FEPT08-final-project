import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import QuienesSomos from './views/QuienesSomos.vue'
import QuesosCabra from './views/QuesosCabra.vue'
import VenAConocernos from './views/VenAConocernos.vue'
import QuesosOveja from './views/QuesosOveja.vue'
import Tienda from './views/Tienda.vue'
import Carrito from './views/Carrito.vue'

// import Contacto from './views/Contacto.vue'


const routes= [
    {path: '/', 
     name: 'Home',
     component: Home
    },    
    {path: '/quienesSomos',
     name: 'QuienesSomos', 
     component: QuienesSomos
    },
    {path: '/quesosOveja', 
     name: 'QuesosOveja',
     component: QuesosOveja
    },
    {path: '/:path(.*)',
     name: 'notFound',
     component: NotFound
    },
    {path: '/venAConocernos',
     name: "VenAConocernos",
     component: VenAConocernos
    },
    {path: '/quesosCabra',
     name: "QuesosCabra",
     component: QuesosCabra
    },
    {path: '/tienda',
        name: "Tienda",
        component: Tienda
    },
    {path: '/carrito',
        name: "Carrito",
        component: Carrito
    },


    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router