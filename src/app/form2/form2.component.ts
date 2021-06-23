import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {

  salida!: string
  promedio!: any

  formulario = new FormGroup ({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      examen: new FormControl('')

    })
  });

  enviar(){
    let nota1=parseInt(this.formulario.value.notas.nota1);
    let nota2=parseInt(this.formulario.value.notas.nota2);
    let nota3=parseInt(this.formulario.value.notas.nota3);
    let examen=parseInt(this.formulario.value.notas.examen);

    if (nota1>=4 && nota2>=4 && nota3>=4 && examen>=4){
      this.promedio=(((nota1+nota2+nota3)/3)*0.7)+(examen*0.3)
      this.salida="Aprobaste con nota "+this.promedio;
    } else {
      this.promedio=(((nota1+nota2+nota3)/3)*0.7)+(examen*0.3)
      this.salida="Reprobaste con nota "+this.promedio;
    }
  }



}
