import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { Noticia } from './components/noticia/noticia.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ProductosHomeComponent } from './pages/productos-home/productos-home.component';
import { ProductoHomeComponent } from './components/producto-home/producto-home.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RedesComponent } from './components/redes/redes.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { ResumenProductoComponent } from './components/resumen-producto/resumen-producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarruselNoticiaComponent } from './components/carrusel-noticia/carrusel-noticia.component';
import { FlujoConfirmacionComponent } from './pages/flujo-confirmacion/flujo-confirmacion.component';
import { FlujoDetallePedidoComponent } from './pages/flujo-detalle-pedido/flujo-detalle-pedido.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';

import { environment } from '../environments/environment';
//Modules
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from '@angular/fire/auth/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosAdminComponent } from './pages/productos-admin/productos-admin.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NoticiasComponent,
    Noticia,
    OfertasComponent,
    OfertaComponent,
    ProductosHomeComponent,
    ProductoHomeComponent,
    TestimoniosComponent,
    TestimonioComponent,
    GaleriaComponent,
    FooterComponent,
    MarcasComponent,
    ContactoComponent,
    RedesComponent,
    DetalleProductoComponent,
    HomePageComponent,
    CarritoComponent,
    LoginComponent,
    AdministradorComponent,
    FormLoginComponent,
    RegistroComponent,
    AdminProfileComponent,
    SpinnerComponent,
    DetalleProductoComponent,
    InfoProductoComponent,
    ResumenProductoComponent,
    NavbarComponent,
    CarruselNoticiaComponent,
    FlujoConfirmacionComponent,
    FlujoDetallePedidoComponent,
    ListaProductosComponent,
    TablaProductosComponent,
    PedidosComponent,
    ProductosAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
    NgbModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
