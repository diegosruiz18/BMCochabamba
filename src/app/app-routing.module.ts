import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FlujoConfirmacionComponent } from './pages/flujo-confirmacion/flujo-confirmacion.component';
import { FlujoDetallePedidoComponent } from './pages/flujo-detalle-pedido/flujo-detalle-pedido.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent,
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
  {
    path: 'register',
    component: RegistroComponent,
  },
  {
    path: 'admin',
    component: AdministradorComponent
  },
  {
    path: 'producto/:id',
    component: DetalleProductoComponent,
  },
  {
    path: 'detalle',
    component: DetalleProductoComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'detalle',
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
    ],
  },
  {
    path: 'flujo-detalles',
    component: FlujoDetallePedidoComponent,
  },
  {
    path: 'flujo-confirmacion',
    component: FlujoConfirmacionComponent,
  },
  {
    path: 'productos',
    component: ListaProductosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    paramsInheritanceStrategy:'always',
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }