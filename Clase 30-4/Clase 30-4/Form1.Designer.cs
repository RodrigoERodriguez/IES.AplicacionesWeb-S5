namespace Clase_30_4
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.lbl_Burguer = new System.Windows.Forms.Label();
            this.cmb_Burguers = new System.Windows.Forms.ComboBox();
            this.opt_Simple = new System.Windows.Forms.RadioButton();
            this.optMediano = new System.Windows.Forms.RadioButton();
            this.optGrande = new System.Windows.Forms.RadioButton();
            this.btn_calcular = new System.Windows.Forms.Button();
            this.lbl_Cant = new System.Windows.Forms.Label();
            this.num_cant = new System.Windows.Forms.NumericUpDown();
            this.lbl_Nombre = new System.Windows.Forms.Label();
            this.txt_nombre = new System.Windows.Forms.TextBox();
            this.lst_resumen = new System.Windows.Forms.ListBox();
            ((System.ComponentModel.ISupportInitialize)(this.num_cant)).BeginInit();
            this.SuspendLayout();
            // 
            // lbl_Burguer
            // 
            this.lbl_Burguer.AutoSize = true;
            this.lbl_Burguer.Location = new System.Drawing.Point(64, 25);
            this.lbl_Burguer.Name = "lbl_Burguer";
            this.lbl_Burguer.Size = new System.Drawing.Size(49, 13);
            this.lbl_Burguer.TabIndex = 0;
            this.lbl_Burguer.Text = "Burguers";
            // 
            // cmb_Burguers
            // 
            this.cmb_Burguers.FormattingEnabled = true;
            this.cmb_Burguers.Location = new System.Drawing.Point(67, 55);
            this.cmb_Burguers.Name = "cmb_Burguers";
            this.cmb_Burguers.Size = new System.Drawing.Size(121, 21);
            this.cmb_Burguers.TabIndex = 1;
            this.cmb_Burguers.SelectedIndexChanged += new System.EventHandler(this.cmb_Burguers_SelectedIndexChanged);
            // 
            // opt_Simple
            // 
            this.opt_Simple.AutoSize = true;
            this.opt_Simple.Location = new System.Drawing.Point(67, 94);
            this.opt_Simple.Name = "opt_Simple";
            this.opt_Simple.Size = new System.Drawing.Size(74, 17);
            this.opt_Simple.TabIndex = 2;
            this.opt_Simple.TabStop = true;
            this.opt_Simple.Text = "Simple + 5";
            this.opt_Simple.UseVisualStyleBackColor = true;
            // 
            // optMediano
            // 
            this.optMediano.AutoSize = true;
            this.optMediano.Location = new System.Drawing.Point(67, 117);
            this.optMediano.Name = "optMediano";
            this.optMediano.Size = new System.Drawing.Size(90, 17);
            this.optMediano.TabIndex = 3;
            this.optMediano.TabStop = true;
            this.optMediano.Text = "Mediano + 10";
            this.optMediano.UseVisualStyleBackColor = true;
            // 
            // optGrande
            // 
            this.optGrande.AutoSize = true;
            this.optGrande.Location = new System.Drawing.Point(67, 140);
            this.optGrande.Name = "optGrande";
            this.optGrande.Size = new System.Drawing.Size(84, 17);
            this.optGrande.TabIndex = 4;
            this.optGrande.TabStop = true;
            this.optGrande.Text = "Grande + 15";
            this.optGrande.UseVisualStyleBackColor = true;
            // 
            // btn_calcular
            // 
            this.btn_calcular.Location = new System.Drawing.Point(91, 174);
            this.btn_calcular.Name = "btn_calcular";
            this.btn_calcular.Size = new System.Drawing.Size(75, 23);
            this.btn_calcular.TabIndex = 5;
            this.btn_calcular.Text = "Calcular";
            this.btn_calcular.UseVisualStyleBackColor = true;
            this.btn_calcular.Click += new System.EventHandler(this.btn_calcular_Click);
            // 
            // lbl_Cant
            // 
            this.lbl_Cant.AutoSize = true;
            this.lbl_Cant.Location = new System.Drawing.Point(322, 24);
            this.lbl_Cant.Name = "lbl_Cant";
            this.lbl_Cant.Size = new System.Drawing.Size(49, 13);
            this.lbl_Cant.TabIndex = 6;
            this.lbl_Cant.Text = "Cantidad";
            // 
            // num_cant
            // 
            this.num_cant.Location = new System.Drawing.Point(325, 55);
            this.num_cant.Name = "num_cant";
            this.num_cant.Size = new System.Drawing.Size(120, 20);
            this.num_cant.TabIndex = 7;
            // 
            // lbl_Nombre
            // 
            this.lbl_Nombre.AutoSize = true;
            this.lbl_Nombre.Location = new System.Drawing.Point(325, 94);
            this.lbl_Nombre.Name = "lbl_Nombre";
            this.lbl_Nombre.Size = new System.Drawing.Size(44, 13);
            this.lbl_Nombre.TabIndex = 8;
            this.lbl_Nombre.Text = "Nombre";
            // 
            // txt_nombre
            // 
            this.txt_nombre.Location = new System.Drawing.Point(328, 117);
            this.txt_nombre.Name = "txt_nombre";
            this.txt_nombre.Size = new System.Drawing.Size(100, 20);
            this.txt_nombre.TabIndex = 9;
            // 
            // lst_resumen
            // 
            this.lst_resumen.FormattingEnabled = true;
            this.lst_resumen.Location = new System.Drawing.Point(325, 163);
            this.lst_resumen.Name = "lst_resumen";
            this.lst_resumen.Size = new System.Drawing.Size(173, 121);
            this.lst_resumen.TabIndex = 10;
            this.lst_resumen.SelectedIndexChanged += new System.EventHandler(this.lst_resumen_SelectedIndexChanged);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.lst_resumen);
            this.Controls.Add(this.txt_nombre);
            this.Controls.Add(this.lbl_Nombre);
            this.Controls.Add(this.num_cant);
            this.Controls.Add(this.lbl_Cant);
            this.Controls.Add(this.btn_calcular);
            this.Controls.Add(this.optGrande);
            this.Controls.Add(this.optMediano);
            this.Controls.Add(this.opt_Simple);
            this.Controls.Add(this.cmb_Burguers);
            this.Controls.Add(this.lbl_Burguer);
            this.Name = "Form1";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.num_cant)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lbl_Burguer;
        private System.Windows.Forms.ComboBox cmb_Burguers;
        private System.Windows.Forms.RadioButton opt_Simple;
        private System.Windows.Forms.RadioButton optMediano;
        private System.Windows.Forms.RadioButton optGrande;
        private System.Windows.Forms.Button btn_calcular;
        private System.Windows.Forms.Label lbl_Cant;
        private System.Windows.Forms.NumericUpDown num_cant;
        private System.Windows.Forms.Label lbl_Nombre;
        private System.Windows.Forms.TextBox txt_nombre;
        private System.Windows.Forms.ListBox lst_resumen;
    }
}

