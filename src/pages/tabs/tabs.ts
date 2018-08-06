import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = ConfiguracoesPage;

  constructor() {

  }
}
