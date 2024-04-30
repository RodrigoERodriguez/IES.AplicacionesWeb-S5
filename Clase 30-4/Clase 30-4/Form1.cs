using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Clase_30_4
{
    public partial class Form1 : Form
    {

        int total = 0;
        int cant = 0;
        string nom = "";
        string bur = "";
        string tam = "";

        public Form1()
        {
            InitializeComponent();
            cmb_Burguers.Items.Add("Burguer A $20");
            cmb_Burguers.Items.Add("Burguer B $25");
            cmb_Burguers.Items.Add("Burguer C $30");          

        }
        

        private void cmb_Burguers_SelectedIndexChanged(object sender, EventArgs e)
        {
            

            if (cmb_Burguers.SelectedIndex == 0) {

                total = total + 20;

                bur = "Burguer A";
                
            }else if (cmb_Burguers.SelectedIndex == 1)

            {

                total = total + 25;

                bur = "Burguer B";

            }

            else
            {

                total = total + 30;

                bur = "Burguer C";

            };
        }

        private void lst_resumen_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void btn_calcular_Click(object sender, EventArgs e)
        {
            lst_resumen.Items.Clear();

            if (opt_Simple.Checked)
            {
                total = total + 5;

                tam = "Simple";
            }

            else if (optMediano.Checked)
            {
                total = total + 10;

                tam = "Mediano";
            }

            else
            {
                total = total + 15;

                tam = "Grande";
            };

            nom = txt_nombre.Text;

            cant = Convert.ToInt32(num_cant.Value);

            total = total * cant;


            lst_resumen.Items.Add("Nombre: " + nom);
            lst_resumen.Items.Add("Burguer:" + bur );
            lst_resumen.Items.Add("Cantidad: " + cant);
            lst_resumen.Items.Add("Tamaño: " + tam);


            lst_resumen.Items.Add("Total: " + total.ToString());
            total = 0;
            txt_nombre.Clear();
            

        }
    }
}
