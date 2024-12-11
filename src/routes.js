import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import QuienesSomos from './views/QuienesSomos.vue'
import QuesosCabra from './views/QuesosCabra.vue'
import ValoresNutricionales from './views/ValoresNutricionales.vue'
import QuesosOveja from './views/QuesosOveja.vue'
import Tienda from './views/Tienda.vue'

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
    {path: '/valoresNutricionales',
     name: "ValoresNutricionales",
     component: ValoresNutricionales
    },
    {path: '/quesosCabra',
     name: "QuesosCabra",
     component: QuesosCabra
    },
    {path: '/tienda',
        name: "Tienda",
        component: Tienda
    }
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router