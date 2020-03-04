import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
// @ts-ignore
import * as parse5 from 'parse5';

const Tab1: React.FC = () => {

  const document = parse5.parse(`
  <html>

<head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    <title>Recibo de Compra</title>
</head>

<body>
    <p>&nbsp;</p>
    <table width='960' border='0' align='center' cellpadding='0' cellspacing='0'>
        <tr>
            <td height='68' colspan='3' align='center'><strong><font size='6'>Kleder's importados</font></strong></td>
        </tr>
        <tr>
            <td height='116' align='right' valign='middle'>
                <table align='center' cellpadding='5'>
                    <tr>
                        <td><strong>Endereço:</strong></td>
                        <td>RUA TESTE, 1234, CAMBORIÚ-SC</td>
                    </tr>
                    <tr>
                        <td><strong>Telefone:</strong></td>
                        <td>(44) 99166-1994</td>
                    </tr>
                    <tr>
                        <td><strong>E-mail:</strong></td>
                        <td>kleder1994@gmail.com</td>
                    </tr>
                </table>
                <br>
                <hr>
                <table border='0' align='center' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td colspan='2' bgcolor='#DBF0FB'><strong><font size='5'>RECIBO DE COMPRA EFETUADA</font></strong></td>
                    </tr>
                    <tr>
                        <td width='67' align='right' bgcolor='#FFF1BB'><strong>Data:</strong></td>
                        <td width='184' align='center' bgcolor='#FFF1BB'>21-12-2019</td>
                    </tr>
                    <tr>
                        <td align='right' bgcolor='#FFFBE8'><strong>Hora:</strong></td>
                        <td align='center' bgcolor='#FFFBE8'>20:48:36</td>
                    </tr>
                </table>
                <br>
            </td>
        </tr>
    </table>
    <table width='960' border='0' align='center' cellpadding='0' cellspacing='0'>
        <tr>
            <td colspan='3' align='center' bgcolor='#FFFFFF'>
                <hr>
            </td>
        </tr>
        <tr>
            <td width='496' align='right' bgcolor='#FFFFFF'>&nbsp;</td>
            <td width='210' align='right' bgcolor='#FFFFFF'><strong><font size='3'>Total sem desconto:</font></strong></td>
            <td width='254' align='right' bgcolor='#FFFFFF'><strong><font size='3'>R$ 459,27</font></strong></td>
        </tr>
        <tr>
            <td width='496' align='right' bgcolor='#FFFFFF'>&nbsp;</td>
            <td width='210' align='right' bgcolor='#FFFFFF'><strong><font size='3'>Desconto(-):</font></strong></td>
            <td width='254' align='right' bgcolor='#FFFFFF'><strong><font size='3'>R$ 0,00</font></strong></td>
        </tr>
        <tr>
            <td width='496' align='right' bgcolor='#FFFFFF'>&nbsp;</td>
            <td width='210' align='right' bgcolor='#FFFFFF'><strong><font size='5'>Total da Compra:</font></strong></td>
            <td width='254' align='right' bgcolor='#FFFFFF'><strong><font size='5'>R$ 459,27</font></strong></td>
        </tr>
        <tr>
            <td colspan='3' align='center' bgcolor='#FFFFFF'>
                <hr>
            </td>
        </tr>
        <tr>
            <td colspan='3' align='right'>
                <table width='100%' border='0' cellpadding='0' cellspacing='3'>
                    <tr>
                        <td colspan='2' align='center' valign='middle' bgcolor='#DBF0FB'><strong><font size='5'>DADOS DO CLIENTE</font></strong></td>
                    </tr>
                    <tr>
                        <td width='8%' align='right' valign='middle' bgcolor='#FFF1BB'><strong>Cliente:</strong></td>
                        <td valign='middle' bgcolor='#FFF1BB'><strong>KLEDERSON LUCAS MONTEIRO DA LUZ</strong></td>
                    </tr>
                    <tr>
                        <td align='right' bgcolor='#FFFBE8'><strong>Endereço:</strong></td>
                        <td bgcolor='#FFFBE8'></td>
                    </tr>
                    <tr>
                        <td align='right' bgcolor='#FFF1BB'><strong>Celular:</strong></td>
                        <td align='left' bgcolor='#FFF1BB'>
                            <a href='tel:'></a>
                        </td>
                    </tr>
                    <tr>
                        <td align='right' bgcolor='#FFFBE8'><strong>Telefone:</strong></td>
                        <td align='left' bgcolor='#FFFBE8'><a href='tel:44991661994'>44991661994</a></td>
                    </tr>
                    <tr>
                        <td align='right' bgcolor='#FFF1BB'><strong>Email:</strong></td>
                        <td align='left' bgcolor='#FFF1BB'><a href='mailto:kleder1994@gmail.com'>kleder1994@gmail.com</a></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td height='76' colspan='3' align='right'>
                <table width='100%' border='0' cellpadding='0' cellspacing='3'>
                    <tr>
                        <td colspan='5' align='center' bgcolor='#DBF0FB'><strong><font size='5'>LISTA DE PRODUTOS</font></strong></td>
                    </tr>
                    <tr>
                        <td width='8%' align='center' bgcolor='#DBF0FB'><strong>ID Item</strong></td>
                        <td width='57%' align='center' bgcolor='#DBF0FB'><strong>Produto</strong></td>
                        <td width='11%' align='center' bgcolor='#DBF0FB'><strong>Quantidade</strong></td>
                        <td width='13%' align='center' bgcolor='#DBF0FB'><strong>Val. Unitátio</strong></td>
                        <td width='11%' align='center' bgcolor='#DBF0FB'><strong>Val. Total</strong></td>
                    </tr>
                    <tr>
                        <td align='center' bgcolor='#FFF1BB'>1</td>
                        <td bgcolor='#FFF1BB'>BANANA</td>
                        <td align='center' bgcolor='#FFF1BB'>2.0</td>
                        <td align='center' bgcolor='#FFF1BB'>R$ 153,09</td>
                        <td align='center' bgcolor='#FFF1BB'>R$ 306,18</td>
                    </tr>
                    <tr>
                        <td align='center' bgcolor='#FFF1BB'>1</td>
                        <td bgcolor='#FFF1BB'>BANANA</td>
                        <td align='center' bgcolor='#FFF1BB'>1.0</td>
                        <td align='center' bgcolor='#FFF1BB'>R$ 153,09</td>
                        <td align='center' bgcolor='#FFF1BB'>R$ 153,09</td>
                    </tr>
            </td>
            </table>
        </tr>
    </table>
</body>

</html>
  
  `);
  console.log(document);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="huehue" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
